import React from 'react'
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import Section from './Components/Trustbrand'
import About from './Components/About'
import ServicesSection from './Components/Servcies'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <Section/>
      <About/>
      <ServicesSection/>
      
    </div>
  )
}

export default App
