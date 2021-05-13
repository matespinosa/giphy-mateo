import { Route } from 'wouter'
import './App.css'
// import ListOfGifs from './components/ListOfGifs/ListOfGifs'
import Detail from './pages/Detail'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'

function App() {
  return (
    <div className='App'>
      <section className='App-content'>
        <h1>Giffy</h1>
        <Route component={Home} path='/' />
        <Route component={SearchResults} path='/search/:keyword' />
        <Route path='/gify/:id' component={Detail} />
      </section>
    </div>
  )
}

export default App
