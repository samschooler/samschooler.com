import fs from 'fs'
import path from 'path'
import TimeClient from './TimeClient'

type ItemData = {
  src: string
  widthInInches: number
  description: string
  title: string
}

// Define the data for each item
const ITEMS_DATA: Record<string, Omit<ItemData, 'src'>> = {
  'kindle.jpeg': {
    widthInInches: 4.6, // Kindle Paperwhite width
    title: 'Kindle Paperwhite',
    description:
      'My Kindle is my library. I love having hundreds of books in such a small package. The e-ink display is easy on the eyes, perfect for reading anywhere.',
  },
  'spindrift.jpeg': {
    widthInInches: 2.25, // Standard can width
    title: 'Spindrift',
    description:
      "Spindrift is my go-to sparkling water. It's refreshing and has just the right amount of real fruit juice. Grapefruit is definitely a top tier flavor.",
  },
  'bonsai.jpeg': {
    widthInInches: 1.5, // Estimated pot width
    title: 'Bonsai Tree',
    description:
      'This Bonsai kit was given to me by my friend Janet. Taking care of it requires patience and attention to detail, which I find very meditative.',
  },
  'plant.png': {
    widthInInches: 4,
    title: 'Potted Plant',
    description: 'A small potted plant that adds a touch of life to my desk.',
  },
  'painting.png': {
    widthInInches: 4,
    title: 'Painting',
    description: 'A painting that I made.',
  },
  // Add defaults for any other images found
}

export default function Time() {
  const directoryPath = path.join(process.cwd(), 'public/static/fun-images')
  const files = fs.readdirSync(directoryPath)

  const items: ItemData[] = files
    .filter((file) => /\.(png|jpe?g|svg|webp)$/i.test(file))
    .map((file) => {
      const itemData = ITEMS_DATA[file] || {
        widthInInches: 5, // Default width
        title: file.split('.')[0].replace(/-/g, ' '),
        description: 'No description available.',
      }

      return {
        src: `/static/fun-images/${file}`,
        ...itemData,
      }
    })

  return <TimeClient items={items} />
}
