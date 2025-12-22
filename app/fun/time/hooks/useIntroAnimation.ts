import { useState, useEffect } from 'react'

export const useIntroAnimation = () => {
  const [show, setShow] = useState(false)
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [spiral, setSpiral] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setShow(true), 1000)
    const timerSubtitle = setTimeout(() => setShowSubtitle(true), 2500)
    const timer2 = setTimeout(() => setSpiral(true), 2500)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timerSubtitle)
      clearTimeout(timer2)
    }
  }, [])

  return { show, showSubtitle, spiral }
}
