import React, { useEffect, useRef, useState } from "react"

const ScrollAnimation = ({
  animateIn,
  animateOnce = false,
  initiallyVisible = false,
  className = "",
  children,
  ...rest
}) => {
  const ref = useRef(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          if (animateOnce) {
            observer.unobserve(element)
          }
        } else if (!animateOnce) {
          setAnimated(false)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(element)

    return () => observer.unobserve(element)
  }, [animateOnce])

  const classes = [className, "animated"]
  if (animated) {
    classes.push(animateIn)
  }
  if (!initiallyVisible && !animated) {
    classes.push("scroll-animation-hidden")
  }

  return (
    <div ref={ref} className={classes.filter(Boolean).join(" ")} {...rest}>
      {children}
    </div>
  )
}

export default ScrollAnimation
