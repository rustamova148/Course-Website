import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Section1 from './components/Section1/Section1'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Section1 />
      <Footer />
    </div>
  )
}

export default App
