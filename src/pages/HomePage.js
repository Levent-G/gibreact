import React from 'react'
import Hero from "../components/Hero"
import Cliens from "../components/Cliens"
import Portfolio from '../components/Portfolio'
import WhyUs from '../components/WhyUs'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Cta from '../components/Cta'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <div className='bg-[#fff]' >
      <Hero/>
      <Cliens/>
      <Portfolio/>
      <WhyUs/>
      <Skills/>
      <Services/>
      <Cta/>
      <Contact/>

    </div>
  )
}

export default HomePage