import React from 'react'
import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import HeroImg from "../assets/img1.jpg"

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero
        cName="hero"
        heroimg={HeroImg}
        title="Your Journey Your Story"
        text="Choose your favourite destination."
        url="/"
        buttonText="Travel Plan"
        btnClass="show"
      />
    </React.Fragment>
  )
}

export default Home