import { useEffect, useState } from 'react'
import Gif from './Gif'
import getGifs from '../services/getGif'

export default function ListOfGifs({ params }) {
  const { keyword } = params
  const [gifs, setGifs] = useState({ loading: false, results: [] })

  useEffect(() => {
    setGifs((actualGifs) => ({ loading: true, results: actualGifs.results }))
    getGifs({ keyword }).then((gifs) => {
      setGifs({ loading: false, results: gifs })
    })
  }, [keyword])

  if (gifs.loading) return <span className='loading'>Loading...</span>

  return (
    <div className='list'>
      {gifs.results.map(({ title, url, id }) => (
        <Gif title={title} url={url} id={id} key={id} />
      ))}
    </div>
  )
}
