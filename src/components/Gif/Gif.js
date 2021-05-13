import './Gif.css'
import { Link } from 'wouter'

export default function Gif({ title, id, url }) {
  return (
    <Link to={`/gif/${id}`} className='gif' key={id}>
      <h4 className='gif-title'>{title}</h4>
      <img loading='lazy' alt={title} src={url} />
    </Link>
  )
}
