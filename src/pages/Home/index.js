import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'

const POPULAR_GIFS = ['Messi', 'Ronaldo', 'Neymar', 'Mbappe']

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [push, pushLocation] = useLocation()
  // const { loading, gifs } = useGifs()
  const [gifs, setGifs] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    // navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input
          className='input-search'
          placeholder='Search gif here..'
          onChange={handleChange}
          type='text'
          value={keyword}
        />
        <button className='btn-search'>Buscar</button>
      </form>
      <h3 className='App-title'>Ultima Búsqueda</h3>
      <ListOfGifs gifs={gifs} />

      <h3 className='app-title'>Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
