import React from 'react'
import './skill.css'
const Skill = () => {
  return (
   <>
   <div className='main'>
    <h2>My Favorite Tools</h2>
    <h3> Exploring The Tools <span style={{color:'rgb(200, 80, 192)', fontFamily:'cursive'}}>Behind My Designs</span>
    </h3>
    <div className="bo">
  <div className="skill-box">
    <span className="tit">Adobe Photoshop </span>

    <div className="skill-bar">
      <span className="skill-per html">
        <span className="tooltip">70%</span>
      </span>
    </div>
  </div>

  <div className="skill-box">
    <span className="tit">Figma</span>

    <div className="skill-bar">
      <span className="skill-per scss">
        <span className="tooltip">80%</span>
      </span>
    </div>
  </div>
  <div className="skill-box">
    <span className="tit">Canva</span>

    <div className="skill-bar">
      <span className="skill-per Canva">
        <span className="tooltip">90%</span>
      </span>
    </div>
  </div>

  
  <div className="skill-box">
    <span className="tit">Adobe Illustrator</span>

    <div className="skill-bar">
      <span className="skill-per Illustrator">
        <span className="tooltip">73%</span>
      </span>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Skill