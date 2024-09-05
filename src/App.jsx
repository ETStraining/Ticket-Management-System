import React, { useEffect } from 'react';
import Hero from './components/Hero';
import 'leaflet/dist/leaflet.css';
import Departures from './components/Departures';
import Vision from './components/Vision';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Modal from 'react-modal'; 
function App() {
  useEffect(() => {
    Modal.setAppElement('#root'); 
  }, []);

  return (
    <div className=''> 
      <Hero />
      <Departures />
      <Vision />
    </div>
  );
}

export default App;