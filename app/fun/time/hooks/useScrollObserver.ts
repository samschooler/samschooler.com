import { useState, useEffect, useRef } from 'react'

export const useScrollObserver = (allCollected: boolean) => {
  const [activeItemId, setActiveItemId] = useState<number | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const introRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!allCollected) return

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.getAttribute('data-intro') === 'true') {
            setActiveItemId(null)
          } else {
            const id = Number(entry.target.getAttribute('data-id'))
            setActiveItemId(id)
          }
        }
      })
    }

    observerRef.current = new IntersectionObserver(handleIntersect, {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
      rootMargin: '-45% 0px -45% 0px',
    })

    const sections = document.querySelectorAll('[data-story-section="true"]')
    sections.forEach((section) => observerRef.current?.observe(section))

    if (introRef.current) {
      observerRef.current.observe(introRef.current)
    }

    return () => observerRef.current?.disconnect()
  }, [allCollected])

  return { activeItemId, introRef }
}
