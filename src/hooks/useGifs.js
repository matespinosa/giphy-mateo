import { useEffect, useState, useContext } from 'react'
import getGifs from '../services/getGif'
import GifsContext from '../context/GifsContext'

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const { gifs, setGifs } = useContext(GifsContext)

  useEffect(
    function () {
      setLoading(true)

      // Recuperamos la keyword del local Sotrage
      const keywordToUse =
        keyword || localStorage.getItem('lastkeyword') || 'random'

      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs)
        setLoading(false)
        // Guardamos la keyword en localstorage
        localStorage.setItem('lastKeyword', keyword)
      })
    },
    [keyword, setGifs]
  )
  return { loading, gifs }
}
