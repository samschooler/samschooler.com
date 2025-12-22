export type ItemData = {
  src: string
  widthInInches: number
  description: string
  title: string
}

export type OrbitingItemData = ItemData & {
  id: number
  initialAngle: number
  speed: number
  direction: number
  delay: number
  scale: number
  distance: number
  pixelWidth: number
}

export type FlyingItem = {
  id: number
  src: string
  x: number
  y: number
  width: number
  height: number
  docked: boolean
  returning?: boolean
}
