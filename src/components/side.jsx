import React from 'react'
import './side.css'

const Side = () => {
  return (
    <>
    <div
      className="slider"
      style={{
        '--width': '150px',
        '--height': '60px',
        '--quantity': '9'
      }}
    >
      <div className="list">
        <div className="item" style={{ '--position': '1' }}>
          <div
            className="card"
            style={{background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)' }}
          >
            <p>Logo Design</p>
          </div>
        </div>
        <div className="item" style={{ '--position': '2' }}>
          <div
            className="card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)'}}
          >
            <p>Branding</p>
            
          </div>
        </div>
        <div className="item" style={{ '--position': '3' }}>
          <div
            className="card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)'}}>
            <p>Business card</p>
          </div>
        </div>
        <div className="item" style={{ '--position': '4' }}>
          <div
            className="card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)' }}
          >
            <p>Web Design</p>
            
          </div>
        </div>
        <div className="item" style={{ '--position': '5' }}>
          <div
            className="card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)'}}
          >
            <p>wireframing</p>
           
          </div>
        </div>
        <div className="item" style={{ '--position': '6' }}>
          <div
            className="card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)'}}
          >
            <p>flyers</p>
          </div>
        </div>
        <div className="item" style={{ '--position': '7' }}>
          <div
            className="card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)'}}
          >
            <p>Product Design</p>
            
          </div>
        </div>
        <div className="item" style={{ '--position': '8' }}>
          <div
            className="card"
            style={{background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)' }}
          >
            <p>App Design</p>
          </div>
        </div>
        <div className="item" style={{ '--position': '9' }}>
          <div
            className="card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)'}}
          >
            <p>UI/UX</p>
            
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Side