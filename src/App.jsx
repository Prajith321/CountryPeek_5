import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CountryDetail from './pages/CountryDetail'
import Favourites from './pages/Favourites'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/country/:cca3"
        element={<CountryDetail />}
      />

      <Route
        path="/favourites"
        element={<Favourites />}
      />
    </Routes>
  )
}

export default App
