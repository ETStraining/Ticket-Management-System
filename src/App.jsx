import React from 'react'
import Hero from './components/Hero'
import 'leaflet/dist/leaflet.css';
import Departures from './components/Departures';
import Vision from './components/Vision';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <div className=' text-cent'>
      {/* <NavBar/>     */}
      <Hero/>
      <Departures/>
      <Vision/>
      {/* <Footer/> */}
    </div>
  )
}

export default App
