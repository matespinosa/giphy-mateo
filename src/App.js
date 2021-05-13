import { Route } from 'wouter'
import './App.css'
// import ListOfGifs from './components/ListOfGifs/ListOfGifs'
import Detail from './pages/Detail'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'

function App() {
  return (
    <StaticContext.Provider value={{}}>
      <div className='App'>
        <section className='App-content'>
          <h1>Giffy</h1>
          <GifsContextProvider>
            <Route component={Home} path='/' />
            <Route component={SearchResults} path='/search/:keyword' />
            <Route path='/gif/:id' component={Detail} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}

export default App
