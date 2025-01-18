import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Blog from './pages/Blog/Blog'
import Footer from './components/Footer/Footer'
import { useState } from 'react'

function App() {
const [isDarkMode, setIsDarkMode] = useState(false);

const handleToggle = () => {
  setIsDarkMode((prevMode) => !prevMode);
}
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar isDarkMode={isDarkMode} onToggle={handleToggle} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
      <Footer isDarkMode={isDarkMode} onToggle={handleToggle} />
    </BrowserRouter>
    </div>
  )
}

export default App
