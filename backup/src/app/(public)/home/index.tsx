import React from 'react'
import Hero from './hero-section/HeroSection'
import Featured from './featured-section/FeaturedSection'
import About from './about-section/About'
import Testimonial from './testimonial-section/Testimonial'

const HomePage = () => {
  return (
    <>
      <Hero/>
      <Featured/>
      <About/>
      <Testimonial/>
    </>
  )
}

export default HomePage