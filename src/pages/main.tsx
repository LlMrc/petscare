

import HomePage from "./home"
import NavBar from "../components/navBar"

import {  Routes, Route} from 'react-router-dom'
import Nopage from "./nopage"
import Contact from "./contact"
import ContentPage from "./content"
import AboutPage from "./about"


const MainPage = () => {

  return (
    <div className='bg-gray-800 overflow-scroll flex justify-center no-scrollbar text-slate-200 md:rounded-t-3xl md:m-8 h-screen shadow-md   ' >
   
       <NavBar/>

      
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/content" element={<ContentPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Nopage/>}/>
     
    </Routes>
  
      </div>
     
     
    
  )
}

export default MainPage