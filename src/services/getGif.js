import { API_KEY, API_URL } from './settings.js'

export default function getGifs({
  limit = 25,
  keyword = 'matrix',
  page = 0,
} = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=g&lang=en`
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response
      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { images, title, id } = image
          const { url } = images.downsized_medium
          return { title, id, url }
        })

        return gifs
      }
    })
}
