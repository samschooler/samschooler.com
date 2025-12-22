'use client'
import { useState } from 'react'
import { ItemData, OrbitingItemData, FlyingItem } from './types'
import { StorySection } from './components/StorySection'
import { SidebarItem } from './components/SidebarItem'
import { IntroScreen } from './components/IntroScreen'
import { useIntroAnimation } from './hooks/useIntroAnimation'
import { useFlyingItems } from './hooks/useFlyingItems'
import { useScrollObserver } from './hooks/useScrollObserver'
import styles from './TimeClient.module.css'

type TimeClientProps = {
  items: ItemData[]
}

// 1 inch = 96px (standard CSS inch) but let's scale it a bit for screen
// Let's say 1 inch = 60px base size for orbiting items
const PPI = 60

export default function TimeClient({ items: initialItems }: TimeClientProps) {
  const [items] = useState<OrbitingItemData[]>(() =>
    initialItems.map((item, i) => ({
      ...item,
      id: i,
      initialAngle: Math.random() * 360,
      speed: 15 + Math.random() * 20, // Seconds per orbit
      direction: Math.random() > 0.5 ? 1 : -1,
      delay: Math.random() * 2000,
      scale: 1,
      distance: 20 + Math.random() * 25, // Orbit radius between 20vmin and 45vmin
      pixelWidth: item.widthInInches * PPI,
    }))
  )

  const { show, showSubtitle, spiral } = useIntroAnimation()

  // 1. Initialize flying items management
  const { selectedIds, flyingItems, allCollected, handleImageClick, returnToOrbit } =
    useFlyingItems(items)

  // 2. Initialize scroll observer using allCollected status
  const { activeItemId, introRef } = useScrollObserver(allCollected)

  // 3. Define the sidebar click handler which bridges the two hooks
  const handleSidebarItemClick = (e: React.MouseEvent<HTMLImageElement>, item: FlyingItem) => {
    e.stopPropagation()
    // If we are at the top (intro), clicking should return it to orbit
    if (activeItemId === null) {
      returnToOrbit(item)
    }
  }

  // Calculate activeIndex once
  const activeIndex =
    activeItemId !== null ? flyingItems.findIndex((i) => i.id === activeItemId) : -1

  return (
    <div
      className={styles.container}
      style={{
        overflowY: allCollected ? 'auto' : 'hidden',
      }}
    >
      {/* Intro Screen / Collection Area */}
      <IntroScreen
        ref={introRef}
        show={show}
        showSubtitle={showSubtitle}
        allCollected={allCollected}
        activeItemId={activeItemId}
        items={items}
        selectedIds={selectedIds}
        spiral={spiral}
        handleImageClick={handleImageClick}
      />

      {/* Story Sections */}
      {allCollected && (
        <div className={styles.storyContainer}>
          {flyingItems.map((item, index) => (
            <StorySection
              key={`story-${item.id}`}
              item={item}
              originalItem={items.find((i) => i.id === item.id)}
              activeIndex={activeIndex}
              index={index}
            />
          ))}
          <div className={styles.spacer} /> {/* Spacer at bottom */}
        </div>
      )}

      {/* Sidebar Items (Fixed Layer) */}
      {flyingItems.map((item, index) => (
        <SidebarItem
          key={`flying-${item.id}`}
          item={item}
          index={index}
          activeIndex={activeIndex}
          activeItemId={activeItemId}
          handleSidebarItemClick={handleSidebarItemClick}
        />
      ))}
    </div>
  )
}
