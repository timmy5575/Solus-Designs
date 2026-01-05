import React from 'react'
import './test.css'

const Test = () => {
  return (
    <>
        <div
      className="s-slider"
      style={{
        '--width': '320px',
        '--height': '90px',
        '--quantity': '9'
      }}
    >
      <div className="s-list">
        <div className="s-item" style={{ '--position': '1' }}>
          <div
            className="s-card"
            style={{background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)' }}
          >
            <h5>Sarah, Boutique Owner</h5>
            <p> 
He nailed our rebrand in one go. The logo feels like us now. Can't recommend them enough!</p>
          </div>
        </div>
        <div className="s-item" style={{ '--position': '2' }}>
          <div
            className="s-card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)'}}
          >
            <h5>Tayo from CreditPadi</h5>
            <p>
Fast turnaround, zero drama. Solus just gets it. Our landing page converts like crazy now.</p>
            
          </div>
        </div>
        <div className="s-item" style={{ '--position': '3' }}>
          <div
            className="s-card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)'}}>
           <h5>Michelle Omatseye., Events Planner</h5>
            <p>
I loved the invitation card that designed. He captured exactly what I couldn't put into words.</p>
          </div>
        </div>
        <div className="s-item" style={{ '--position': '4' }}>
          <div
            className="s-card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)' }}
          >
            <h5>Ruth Odessa</h5>
            <p>
New menu design increased our sales by 30%. Not kidding. These folks know their stuff.</p>
            
          </div>
        </div>
        <div className="s-item" style={{ '--position': '5' }}>
          <div
            className="s-card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)'}}
          >
            <h5>Oladele Esther, Entrepreneur </h5>
            <p>
My old website screamed 2010. Now it screams 'hire me.' Best investment I've made this year.</p>
           
          </div>
        </div>
        <div className="s-item" style={{ '--position': '6' }}>
          <div
            className="s-card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)'}}
          >
            <h5>Christain Emegwa., Real Estate Agent</h5>
            <p>
Solus designed my business cards and suddenly people actually keep them. Little details matter!</p>
          </div>
        </div>
        <div className="s-item" style={{ '--position': '7' }}>
          <div
            className="s-card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)'}}
          >
            <h5>Tomiwa</h5>
            <p>
Solus made our brand feel craft without being pretentious.</p>
            
          </div>
        </div>
        <div className="s-item" style={{ '--position': '8' }}>
          <div
            className="s-card"
            style={{background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)' }}
          >
            <h5>The Lens Photography</h5>
            <p>
"Finally, a portfolio site that doesn't overshadow my work. Clean, elegant, perfect</p>
          </div>
        </div>
        <div className="s-item" style={{ '--position': '9' }}>
          <div
            className="s-card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)'}}
          > <h5>Awesome Adelaide., Author</h5>
            <p>
            Book cover design that actually stopped people scrolling. Sales jumped immediately after launch.</p>   
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Test