import About from '@/Components/About'
import CompanyStatusSection from '@/Components/CompanyStatusSection'
import Homepage from '@/Components/Homepage'
import MissionVision from '@/Components/Mission&vissison'
import ServicesSection from '@/Components/Servcies'
import Section from '@/Components/Trustbrand'
import WhyChooseUs from '@/Components/Whycompany'
import Profilesection from '@/Components/Profilesection'
import TestimonialSlider from '@/Components/Testimonials'
import React from 'react'
import Gallerysection from '@/Components/Gallery'
import Newspapercard from '@/Components/Newspapercard'

const Homeroutes = () => {
  return (
    <div>
      <Homepage/>
      <Section/>
      <About/>
      <ServicesSection/>
      <MissionVision/>
      <CompanyStatusSection/>
      <WhyChooseUs/>
      <Profilesection/>
      <TestimonialSlider/>
      <Gallerysection/>
      <Newspapercard/>
    </div>
  )
}

export default Homeroutes
