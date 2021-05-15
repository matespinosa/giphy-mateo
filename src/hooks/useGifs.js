import { useEffect, useState, useContext } from 'react'
import getGifs from '../services/getGif'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const { gifs, setGifs } = useContext(GifsContext)
  // Recuperamos la keyword del local Sotrage
  const keywordToUse =
    keyword || localStorage.getItem('lastkeyword') || 'random'

  useEffect(
    function () {
      setLoading(true)

      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs)
        setLoading(false)
        // Guardamos la keyword en localstorage
        localStorage.setItem('lastKeyword', keyword)
      })
    },
    [keyword, keywordToUse, setGifs]
  )

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)

    getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs))
      setLoadingNextPage(false)
    })
  }, [keywordToUse, page, setGifs])
  return { loading, loadingNextPage, gifs, setPage }
}
