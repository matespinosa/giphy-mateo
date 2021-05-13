export default function Detail({ params }) {
  console.log(params.id)
  return <h2>GIF con id {params.id}</h2>
}
