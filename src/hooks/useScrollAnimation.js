import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, isVisible]. Attach ref to a container element; isVisible flips
 * true once that element crosses the viewport threshold. Fires once — no re-trigger.
 */
export default function useScrollAnimation(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
