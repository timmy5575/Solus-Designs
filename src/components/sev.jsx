import React from 'react'
import { Link } from "react-router-dom";
import './sev.css'
import ui from '../assets/ui.svg'
import gra from '../assets/gra.svg'
import bt from '../assets/bt.svg'

const Project = () => {
  return (
    <>
    <div className='job'>
    <h1> <span style={{color:'rgb(200, 80, 192)'}}>|Services </span> I Provide</h1>
    <div className='al'>

                    <div className="container noselect">
                      <div className="canvas">
                        <div className="tracker tr-1"></div>
                        <div className="tracker tr-2"></div>
                        <div className="tracker tr-3"></div>
                        <div className="tracker tr-4"></div>
                        <div className="tracker tr-5"></div>
                        <div className="tracker tr-6"></div>
                        <div className="tracker tr-7"></div>
                        <div className="tracker tr-8"></div>
                        <div className="tracker tr-9"></div>
                        <div className="tracker tr-10"></div>
                        <div className="tracker tr-11"></div>
                        <div className="tracker tr-12"></div>
                        <div className="tracker tr-13"></div>
                        <div className="tracker tr-14"></div>
                        <div className="tracker tr-15"></div>
                        <div className="tracker tr-16"></div>
                        <div className="tracker tr-17"></div>
                        <div className="tracker tr-18"></div>
                        <div className="tracker tr-19"></div>
                        <div className="tracker tr-20"></div>
                        <div className="tracker tr-21"></div>
                        <div className="tracker tr-22"></div>
                        <div className="tracker tr-23"></div>
                        <div className="tracker tr-24"></div>
                        <div className="tracker tr-25"></div>
                        <div id="card">
                          <img src={ui} alt="" />
                        <p id="prompt">UI/UX</p>
                          <div className="title">i design app <br/>and website that<br/>are simple
                          <br/>intuitive and <br/>easy to navigate </div>
                          <div className="subtitle">
                            <button>learn more →</button>
                          </div>
                        </div>
                      </div>
                    </div>

                  <div className="container noselect">
                    <div className="canvas">
                      <div className="tracker tr-1"></div>
                      <div className="tracker tr-2"></div>
                      <div className="tracker tr-3"></div>
                      <div className="tracker tr-4"></div>
                      <div className="tracker tr-5"></div>
                      <div className="tracker tr-6"></div>
                      <div className="tracker tr-7"></div>
                      <div className="tracker tr-8"></div>
                      <div className="tracker tr-9"></div>
                      <div className="tracker tr-10"></div>
                      <div className="tracker tr-11"></div>
                      <div className="tracker tr-12"></div>
                      <div className="tracker tr-13"></div>
                      <div className="tracker tr-14"></div>
                      <div className="tracker tr-15"></div>
                      <div className="tracker tr-16"></div>
                      <div className="tracker tr-17"></div>
                      <div className="tracker tr-18"></div>
                      <div className="tracker tr-19"></div>
                      <div className="tracker tr-20"></div>
                      <div className="tracker tr-21"></div>
                      <div className="tracker tr-22"></div>
                      <div className="tracker tr-23"></div>
                      <div className="tracker tr-24"></div>
                      <div className="tracker tr-25"></div>
                      <div id="card">
                        <img src={gra} alt="" />
                      <p id="prompt">Graphics Design</p>
                        <div className="title">i create <br /> eye-caching visuals
                        <br /> like logos, flyers,<br/>  business card<br/> that communicate <br/> 
                        messages clearly <br/> and grab your <br/> attention</div>
                        <div className="subtitle"><button>learn more →</button> </div>
                       </div>
                    </div>
                  </div>

      <div className="container noselect">
        <div className="canvas">
          <div className="tracker tr-1"></div>
          <div className="tracker tr-2"></div>
          <div className="tracker tr-3"></div>
          <div className="tracker tr-4"></div>
          <div className="tracker tr-5"></div>
          <div className="tracker tr-6"></div>
          <div className="tracker tr-7"></div>
          <div className="tracker tr-8"></div>
          <div className="tracker tr-9"></div>
          <div className="tracker tr-10"></div>
          <div className="tracker tr-11"></div>
          <div className="tracker tr-12"></div>
          <div className="tracker tr-13"></div>
          <div className="tracker tr-14"></div>
          <div className="tracker tr-15"></div>
          <div className="tracker tr-16"></div>
          <div className="tracker tr-17"></div>
          <div className="tracker tr-18"></div>
          <div className="tracker tr-19"></div>
          <div className="tracker tr-20"></div>
          <div className="tracker tr-21"></div>
          <div className="tracker tr-22"></div>
          <div className="tracker tr-23"></div>
          <div className="tracker tr-24"></div>
          <div className="tracker tr-25"></div>
          <div id="card">
            <img src={bt} alt="" />
          <p id="prompt">Brand Identity</p>
            <div className="title">i help companies <br/> develop their unique<br /> look and feel, 
            <br/> choosing colors, <br/> fonts and styles <br/> that make them <br/>instantly recognizable <br/> and memorable  </div>
            <div className="subtitle"><button>learn more →</button></div>
          </div>
        </div>
  </div>
</div>
       <Link to="/projects">
        <button className="port" >learn more →</button>
      </Link>
</div>
    </>
  )
}
export default Project