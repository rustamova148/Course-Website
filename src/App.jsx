import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Blog from './pages/Blog/Blog'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
