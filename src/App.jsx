import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App
