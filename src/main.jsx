import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Dashboard from './components/Dashboard.jsx'
import NewTicket from './components/NewTicket.jsx'
import ContactDetail from './components/ContactDetail.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <Router>
    <Routes>
      <Route path='/' element={ <App />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/new-ticket' element={<NewTicket/>} />
      <Route path='/contact-detail' element={<ContactDetail/>} />
    </Routes>
   </Router>
  </React.StrictMode>,
)
