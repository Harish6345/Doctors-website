import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Doctors from './Pages/Doctors'
import Login from './Pages/Login'
import About from './pages/About'
import Contact from './Pages/Contact'
import Myprofile from './Pages/Myprofile'
import Myappointments from './Pages/Myappointments'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Appointment from './Pages/Appointment'

function App() {
  return (
    <div className='mx-4 sm:mx-[10%] min-h-[100vh] '>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/Myprofile' element={<Myprofile/>}/>
        <Route path='/Myappointements' element={<Myappointments/>} />
        <Route path='/appointments/:docId' element={<Appointment/>} />
         




      </Routes>
      <Footer/>
  



    </div>
  )
}

export default App