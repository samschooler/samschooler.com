import { OrbitingItemData } from '../types'
import styles from './OrbitingItem.module.css'

type OrbitingItemProps = {
  item: OrbitingItemData
  isSelected: boolean
  activeItemId: number | null
  spiral: boolean
  handleImageClick: (e: React.MouseEvent<HTMLImageElement>, item: OrbitingItemData) => void
}

export const OrbitingItem = ({
  item,
  isSelected,
  activeItemId,
  spiral,
  handleImageClick,
}: OrbitingItemProps) => {
  // Use configured width, or fallback
  const width = item.pixelWidth

  return (
    <div
      className={styles.wrapper}
      style={{
        transform: `rotate(${item.initialAngle}deg)`,
        pointerEvents: activeItemId === null && !isSelected ? 'auto' : 'none',
        opacity: isSelected ? 0 : 1,
        transition: isSelected ? 'none' : 'opacity 1s ease-in-out',
      }}
    >
      <div
        className={styles.spinner}
        style={{
          animation: `${styles.spin} ${item.speed}s linear infinite ${item.direction === -1 ? 'reverse' : 'normal'}`,
        }}
      >
        <button
          type="button"
          onClick={(e) => {
            const img = e.currentTarget.querySelector('img')
            if (img) handleImageClick(e as unknown as React.MouseEvent<HTMLImageElement>, item)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleImageClick(e as unknown as React.MouseEvent<HTMLImageElement>, item)
            }
          }}
          className={styles.imageButton}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: `-${width / 2}px`,
            marginLeft: `-${width / 2}px`,
            transform: spiral
              ? `translateX(${item.distance}vmin) scale(${item.scale})`
              : `translateX(150vmax) scale(${item.scale})`,
            transition: `transform 4s cubic-bezier(0.1, 0.7, 0.1, 1) ${item.delay}ms`,
            width: `${width}px`,
            height: `${width}px`,
            cursor: isSelected ? 'default' : 'pointer',
            background: 'none',
            border: 'none',
            padding: 0,
          }}
        >
          <img
            src={item.src}
            alt=""
            draggable={false}
            className={styles.image}
            style={{
              width: '100%',
              height: '100%',
              display: 'block',
            }}
          />
        </button>
      </div>
    </div>
  )
}
