import Gif from '../Gif/Gif'

export default function ListOfGifs({ gifs }) {
  return (
    <div className='list'>
      {gifs.map(({ title, url, id }) => (
        <Gif title={title} url={url} id={id} key={id} />
      ))}
    </div>
  )
}
