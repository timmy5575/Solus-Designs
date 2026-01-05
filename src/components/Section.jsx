import React from 'react'
import './Sect.css'
import idea from '../assets/idea.png'
import cre from '../assets/crev.png'
import att from '../assets/attr.png'

const Section = () => {
  return (
    <>
    <div className='about'>
      <h2> About me</h2>
      <p>I create brand identities, user interfaces,
         and visual designs that help businesses stand out and connect with their audiences. 
         Whether you need a complete brand overhaul, a digital product redesign,
         or compelling graphics, I'm here to bring your vision to life. I'm currently taking on new projects and collaborations. Let's talk about your goals and how great design can help you achieve them.</p>
         <div className='qua'>
          <div>
            <h2 id='qu'>200+</h2>
          <p id='det'>Project Completed</p>
          </div>
          <div>
            <h2 id='qu'>20+</h2>
            <p id='det'>Brands Created</p>
          </div>
          <div>
            <h2 id='qu'>6+</h2>
            <p id='det'>Years of Experience</p>
          </div>
         </div>
         
    </div>
    {/* <div className='all'>
      <div className='cards'>
        <div>
        <img src={cre} alt="" />
        <h5>Creative Design</h5>
        <p>Unique and memorable designs that capture your brand's essence</p>
        </div>

        <div>
        <img src={idea} alt="" />
        <h5>Innovative Solutions</h5>
        <p>Forward-thinking approaches to solve complex design challenges</p></div>

        <div>
          <img src={att} alt="" />
          <h5>Attention to Detail</h5>
          <p>Meticulous craftsmanship in every pixel and interaction</p>
          </div>
      </div>
    </div> */}
    </>
  )
}

export default Section