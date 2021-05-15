import Spinner from '../../components/Spinner/Spinner'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'

export default function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })

  const handleNextPage = () => setPage((prevPage) => prevPage + 1)

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h3 className='App-title'>{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
        </div>
      )}
      <br />
      <button className='btn-nextPage' onClick={handleNextPage}>
        Get next page
      </button>
    </>
  )
}
