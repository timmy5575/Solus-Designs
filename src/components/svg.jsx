import React from 'react'
import './svg.css'
import ig from '../assets/ig.svg'
import fb from '../assets/fb.svg'
import X from '../assets/x.svg'
import wh from '../assets/wh.svg'
import em from '../assets/email.svg'
import phone from '../assets/phone.svg'

const Svg = () => {
  return (
<>
<div >
  <div className='link'>
     <a
      href="https://www.instagram.com/professor_of_the_heavens?igsh=MWU5dzNtMjFkbTI1Mg=="
      target="_blank"
      rel="noopener noreferrer"
    > 
      <img src={ig} alt="ig"  /> 
</a>
    <a
      href="https://www.facebook.com/oluwafemisamuel.oyewole.9?mibextid=ZbWKwL"
      target="_blank"
      rel="noopener noreferrer"
    > 
      <img src={fb} alt="fb"  /> 
    </a>

    <a
      href="https://x.com/femiszn03?t=RIYppiBDA-KZI2bNgj5qVQ&s=09"
      target="_blank"
      rel="noopener noreferrer"
    > 
      <img src={X} alt="X"  /> 
    </a>


    <a
      href="https://wa.link/91ir0n"
      target="_blank"
      rel="noopener noreferrer"
    > 
      <img src={wh} alt=""  />
    </a>
  </div>
 

<div /> 
</div>

</>
  )
}

export default Svg