import { useState, useEffect, useCallback } from 'react'
import { OrbitingItemData, FlyingItem } from '../types'

export const useFlyingItems = (items: OrbitingItemData[]) => {
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set())
  const [flyingItems, setFlyingItems] = useState<FlyingItem[]>([])
  const [allCollected, setAllCollected] = useState(false)

  useEffect(() => {
    if (selectedIds.size === items.length && items.length > 0) {
      setTimeout(() => setAllCollected(true), 1000)
    }
  }, [selectedIds, items.length])

  const handleImageClick = useCallback(
    (e: React.MouseEvent<HTMLImageElement>, item: OrbitingItemData) => {
      e.stopPropagation()
      if (selectedIds.has(item.id)) return

      const rect = e.currentTarget.getBoundingClientRect()
      const newSelectedIds = new Set(selectedIds)
      newSelectedIds.add(item.id)
      setSelectedIds(newSelectedIds)

      const newItem: FlyingItem = {
        id: item.id,
        src: item.src,
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
        docked: false,
      }

      setFlyingItems((prev) => [...prev, newItem])

      // Trigger the move to the left sidebar in the next tick
      setTimeout(() => {
        setFlyingItems((prev) => {
          const occupiedYs = new Set(
            prev.filter((i) => i.docked && i.id !== item.id).map((i) => i.y)
          )

          let targetY = 200
          while (occupiedYs.has(targetY)) {
            targetY += 100
          }

          return prev.map((i) =>
            i.id === item.id ? { ...i, docked: true, x: 20, y: targetY, width: 80, height: 80 } : i
          )
        })
      }, 50)
    },
    [selectedIds]
  )

  const returnToOrbit = useCallback((item: FlyingItem) => {
    setFlyingItems((prev) =>
      prev.map((i) =>
        i.id === item.id
          ? {
              ...i,
              x: window.innerWidth / 2 - i.width / 2,
              y: window.innerHeight / 2 - i.height / 2,
              returning: true,
            }
          : i
      )
    )

    setTimeout(() => {
      setSelectedIds((prev) => {
        const next = new Set(prev)
        next.delete(item.id)
        return next
      })
      setFlyingItems((prev) => prev.filter((i) => i.id !== item.id))

      // Also reset allCollected if we remove an item
      setAllCollected(false)
    }, 500)
  }, [])

  return {
    selectedIds,
    flyingItems,
    allCollected,
    handleImageClick,
    returnToOrbit,
  }
}
