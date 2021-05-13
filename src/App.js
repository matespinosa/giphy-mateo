import { Link, Route } from 'wouter'
import './App.css'
import ListOfGifs from './components/ListOfGifs'

function App() {
  return (
    <div className='App'>
      <section className='App-content'>
        <h1>App</h1>
        <Link to='/gif/messi'>Gif de messi</Link>
        <Link to='/gif/ronaldo'>Gif de Ronaldo</Link>
        <Link to='/gif/mbappe'>Gif de Mbappe</Link>
        <Route path='/gif/:keyword' component={ListOfGifs} />
      </section>
    </div>
  )
}

export default App
