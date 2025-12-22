import { useMemo } from 'react'
import styles from './PostIt.module.css'

const CHARS_PER_POSTIT = 250

// Helper to get chunk
const getChunks = (str: string, len: number) => {
  const ret: string[] = []
  let i = 0
  while (i < str.length) {
    let end = i + len
    if (end < str.length) {
      const spaceIndex = str.lastIndexOf(' ', end)
      if (spaceIndex > i) {
        end = spaceIndex
      }
    }
    ret.push(str.slice(i, end).trim())
    i = end
  }
  return ret
}

export const PostIt = ({ text, title }: { text: string; title: string }) => {
  const postItData = useMemo(() => {
    const chunks = getChunks(text, CHARS_PER_POSTIT)
    return chunks.map((chunk) => ({
      text: chunk,
      rotation: -20 + Math.random() * 30 - 15, // +/- 15 degrees
      offsetX: Math.random() * 60 - 30, // +/- 30px x-offset
    }))
  }, [text])

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.postItContainer}>
        {postItData.map((item, i) => (
          <div
            key={i}
            className={styles.postIt}
            style={{
              transform: `translate(${item.offsetX}px, 0) rotate(${item.rotation}deg)`,
              marginTop: i === 0 ? '0' : '-120px',
              zIndex: postItData.length - i,
            }}
          >
            <div className={styles.postItContent}>
              <p className={styles.text}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
