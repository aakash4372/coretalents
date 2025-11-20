import React from 'react'
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import Section from './Components/Trustbrand'
import About from './Components/About'
import ServicesSection from './Components/Servcies'
import CompanyStatusSection from './Components/CompanyStatusSection'
import MissionVision from './Components/Mission&vissison'
import WhyChooseUs from './Components/Whycompany'
import Profilesection from './Components/Profilesection'
import TestimonialSlider from './Components/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <Section/>
      <About/>
      <ServicesSection/>
      <MissionVision/>
      <CompanyStatusSection/>
      <WhyChooseUs/>
      <Profilesection/>
      <TestimonialSlider/>
      
    </div>
  )
}

export default App
