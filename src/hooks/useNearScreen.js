import { useState, useEffect, useRef } from 'react'

export default function useNearScreen({ distance = '1080px' } = {}) {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()

  // useEffect(() => {
  //   const onChange = (entries) => {
  //     console.log(entries)
  //     const el = entries[0]
  //     console.log(el.isIntersecting)
  //     if (el.isIntersecting) {
  //       setShow(true)
  //       observer.disconnect()
  //     }
  //   }
  //   const observer = new IntersectionObserver(onChange, {
  //     rootMargin: distance,
  //   })

  //   observer.observe(fromRef.current)

  //   return () => observer.disconnect()
  // })

  useEffect(() => {
    let observer

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      })

      observer.observe(fromRef.current)
    })

    return () => observer && observer.disconnect()
  })

  return { isNearScreen, fromRef }
}
