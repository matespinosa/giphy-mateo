import { useEffect, useState } from 'react'
import getGifs from '../services/getGif'

export function useGifs({ keyword }) {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  useEffect(
    function () {
      setLoading(true)
      console.log(setLoading)
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs)
        setLoading(false)
      })
    },
    [keyword]
  )
  return { loading, gifs }
}
