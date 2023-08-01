import React from 'react'
import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import ServiceImg from "../assets/img12.jpg"

const Service = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero
        cName="hero-about"
        heroimg={ServiceImg}
        title="Service"
        btnClass="hide"
      />
    </React.Fragment>
  )
}

export default Service