import React from 'react'
import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import AboutImg from "../assets/img14.jpg"

const About = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero
        cName="hero-about"
        heroimg={AboutImg}
        title="About"
        btnClass="hide"
      />
    </React.Fragment>
  )
}

export default About