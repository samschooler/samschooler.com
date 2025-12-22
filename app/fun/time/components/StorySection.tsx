import { FlyingItem, ItemData } from '../types'
import { PostIt } from './PostIt'
import styles from './StorySection.module.css'

type StorySectionProps = {
  item: FlyingItem
  originalItem: ItemData | undefined
  activeIndex: number
  index: number
}

export const StorySection = ({ item, originalItem, activeIndex, index }: StorySectionProps) => {
  // If we are active, index == activeIndex
  const isFuture = activeIndex === -1 || index > activeIndex

  // Animation logic:
  // 1. Initial/Future state: Image looks like it's coming from sidebar.
  //    TranslateX roughly (-50vw + 170px)
  // 2. Active/Past state: Image is centered. Translate(0)

  const transform = isFuture
    ? 'translate(calc(-50vw + 100px), 0) scale(0.3)'
    : 'translate(0, 0) scale(1)'

  const opacity = isFuture ? 0 : 1

  // Use larger scaling for main view (e.g. 2x orbit size or based on inches)
  // Let's use 96px per inch for "real size" on screen in main view
  const realWidth = (originalItem?.widthInInches || 5) * 96

  return (
    <div className={styles.storySection} data-id={item.id} data-story-section="true">
      {/* Image in flow */}
      <div className={styles.imageContainer}>
        <img
          src={item.src}
          alt=""
          draggable={false}
          className={styles.image}
          style={{
            width: `${realWidth}px`,
            transform: transform,
            opacity: opacity,
          }}
        />
      </div>

      <PostIt text={originalItem?.description || ''} title={originalItem?.title || ''} />
    </div>
  )
}
