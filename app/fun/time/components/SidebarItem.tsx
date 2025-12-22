import { FlyingItem } from '../types'
import styles from './SidebarItem.module.css'

type SidebarItemProps = {
  item: FlyingItem
  index: number
  activeIndex: number
  activeItemId: number | null
  handleSidebarItemClick: (e: React.MouseEvent<HTMLImageElement>, item: FlyingItem) => void
}

export const SidebarItem = ({
  item,
  index,
  activeIndex,
  activeItemId,
  handleSidebarItemClick,
}: SidebarItemProps) => {
  // Show in sidebar ONLY if it hasn't been "activated" yet
  // So if index > activeIndex, show it.
  // If index <= activeIndex, hide it (it's now in the story flow)
  // Also show if activeIndex is -1 (intro)

  const shouldShow = activeIndex === -1 || index > activeIndex
  const opacity = item.returning ? 0 : shouldShow ? 1 : 0
  const transform = `translate(${item.x}px, ${item.y}px)` + (item.returning ? ' scale(0.1)' : '')

  return (
    <button
      type="button"
      onClick={(e) => {
        const img = e.currentTarget.querySelector('img')
        if (img) handleSidebarItemClick(e as unknown as React.MouseEvent<HTMLImageElement>, item)
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleSidebarItemClick(e as unknown as React.MouseEvent<HTMLImageElement>, item)
        }
      }}
      className={styles.sidebarItemButton}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: item.width,
        height: item.height,
        transform: transform,
        transition: 'opacity 0.5s, transform 0.5s',
        pointerEvents: activeItemId === null && !item.returning ? 'auto' : 'none', // Only clickable in intro
        cursor: activeItemId === null ? 'pointer' : 'default',
        zIndex: 100,
        opacity: opacity,
        background: 'none',
        border: 'none',
        padding: 0,
      }}
    >
      <img
        src={item.src}
        alt=""
        draggable={false}
        className={styles.sidebarItem}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </button>
  )
}
