import React from 'react'
import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import ContactImg from "../assets/img2.jpg"

const Contact = () => {
  return (
    <React.Fragment>
    <Navbar />
    <Hero
      cName="hero-about"
      heroimg={ContactImg}
      title="Contact"
      btnClass="hide"
    />
  </React.Fragment>
  )
}

export default Contact