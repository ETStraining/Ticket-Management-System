import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div className=' text-cent'>
      <NavBar/>
    
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App
