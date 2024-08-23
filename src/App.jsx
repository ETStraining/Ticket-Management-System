import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import 'leaflet/dist/leaflet.css';
import Departures from './components/Departures';

function App() {
  return (
    <div className=' text-cent'>
      {/* <NavBar/>     */}
      <Hero/>
      <Departures/>
      {/* <Footer/> */}
    </div>
  )
}

export default App
