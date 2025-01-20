import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Blog from './pages/Blog/Blog'
import Footer from './components/Footer/Footer'
import { useEffect, useState } from 'react'
import ScrollToTop from './components/ScrollToTop'

function App() {
const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("mode"));

useEffect(() => {
  if(localStorage.getItem("mode") === null){
    setIsDarkMode("light");
    localStorage.setItem("mode", "light");
  }
  document.body.className = localStorage.getItem("mode");
},[])

const handleToggle = () => {
  if(localStorage.getItem("mode") === "light"){
    setIsDarkMode("dark");
    localStorage.setItem("mode", "dark");
  }else{
    setIsDarkMode("light");
    localStorage.setItem("mode", "light");
  }
  document.body.className = localStorage.getItem("mode");
}
  return (
    <div className='app'>
      <BrowserRouter>
      <ScrollToTop />
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
