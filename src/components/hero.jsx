import React from 'react'
import { Link } from "react-router-dom";
import './hero.css'

const Hero = () => {
  return (
    <>
    <div className='two'>
      <h1 data-text={'Solus Designs'}>Solus Designs</h1>
  <p>Crafting exceptional digital experiences through innovative design and creative solutions</p>
       
        <div className='b'>
       <Link to="/projects">
        <button className="buttons" id='but'>View project →</button>
      </Link>
      
      <button className="buttons"
        onClick={() =>document.getElementById("contact")?.scrollIntoView({ behavior: "smooth",})}>Get in Touch</button>
    </div>
    </div>
    </>
  )
}

export default Hero