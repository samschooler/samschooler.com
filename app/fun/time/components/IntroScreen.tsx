import { useRef, forwardRef } from 'react'
import { OrbitingItemData } from '../types'
import { OrbitingItem } from './OrbitingItem'
import styles from './IntroScreen.module.css'

type IntroScreenProps = {
  show: boolean
  showSubtitle: boolean
  allCollected: boolean
  activeItemId: number | null
  items: OrbitingItemData[]
  selectedIds: Set<number>
  spiral: boolean
  handleImageClick: (e: React.MouseEvent<HTMLImageElement>, item: OrbitingItemData) => void
}

export const IntroScreen = forwardRef<HTMLDivElement, IntroScreenProps>(
  (
    {
      show,
      showSubtitle,
      allCollected,
      activeItemId,
      items,
      selectedIds,
      spiral,
      handleImageClick,
    },
    ref
  ) => {
    return (
      <div ref={ref} data-intro="true" className={styles.introContainer}>
        <div
          className={styles.textContainer}
          style={{
            opacity: activeItemId !== null ? 0 : 1,
          }}
        >
          <span
            className={styles.title}
            style={{
              opacity: show ? 1 : 0,
            }}
          >
            Hi I'm Sam
          </span>
          <span
            className={styles.subtitle}
            style={{
              opacity: showSubtitle ? 1 : 0,
            }}
          >
            I collect things
          </span>
          {allCollected && <span className={styles.scrollHint}>(Scroll down)</span>}
        </div>

        {/* Orbiting Items */}
        {items.map((item) => (
          <OrbitingItem
            key={item.id}
            item={item}
            isSelected={selectedIds.has(item.id)}
            activeItemId={activeItemId}
            spiral={spiral}
            handleImageClick={handleImageClick}
          />
        ))}
      </div>
    )
  }
)

IntroScreen.displayName = 'IntroScreen'
