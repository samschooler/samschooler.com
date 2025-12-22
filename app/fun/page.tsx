'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Fun() {
  const [expanded, setExpanded] = useState(false)
  const [hovered, setHovered] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    if (!expanded) {
      setExpanded(true)
      setTimeout(() => {
        router.push('/fun/time')
      }, 1500)
    } else {
      setExpanded(false)
    }
  }

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      width: '100vw',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      overflow: 'hidden',
      backgroundColor: 'white',
    },
    text: {
      cursor: expanded ? 'default' : 'pointer',
      transition: 'transform 1500ms ease-in-out',
      // Targeting the 'w' in "It works!" to ensure we zoom into ink, not a gap
      transformOrigin: '30% 60%',
      transform: expanded ? 'scale(10000)' : 'scale(1)',
      userSelect: 'none' as const,
      whiteSpace: 'nowrap' as const,
    },
  }

  return (
    <div style={styles.container}>
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          ...styles.text,
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          font: 'inherit',
          color: 'inherit',
        }}
      >
        It works!
      </button>
    </div>
  )
}
