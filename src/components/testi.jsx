import React from 'react'
import './testi.css'

const Testi = () => {
  return (
    <>
     <div
      className="t-slider"
      style={{
        '--width': '320px',
        '--height': '90px',
        '--quantity': '9'
      }}
    >
      <div className="t-list">
        <div className="t-item" style={{ '--position': '1' }}>
          <div
            className="t-card"
            style={{background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)' }}
          > <h5>Jasmine</h5>
            <p>The packaging redesign was a game changer</p>
          </div>
        </div>
        <div className="t-item" style={{ '--position': '2' }}>
          <div
            className="t-card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)'}}
          >
            <h5>Ryan P., App Developer</h5>
            <p>UI/UX work was seamless. They understood our users better than we did, honestly.</p>
            
          </div>
        </div>
        <div className="t-item" style={{ '--position': '3' }}>
          <div
            className="t-card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)'}}>
              <h5>Linda Christina., Blogger</h5>
            <p>Calm, balanced, exactly what our brand needed. They even fixed things I didn't know were wrong.</p>
          </div>
        </div>
        <div className="t-item" style={{ '--position': '4' }}>
          <div
            className="t-card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)' }}
          >
            <h5>Natasha, E-commerce Store Owner</h5>
            <p>
              Product photos and layout refresh = 45% more sales in two months. Do the math.
            </p>
            
          </div>
        </div>
        <div className="t-item" style={{ '--position': '5' }}>
          <div
            className="t-card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)'}}
          >
            <h5>Ebuka., Podcaster</h5>
            <p>Album art that makes people click. Simple as that. Worth every kobo</p>
           
          </div>
        </div>
        <div className="t-item" style={{ '--position': '6' }}>
          <div
            className="t-card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)'}}
          >
            <h5>Sarah, Boutique Owner</h5>
            <p>He nailed our rebrand in one go. The logo feels like us now. Can't recommend them enough</p>
          </div>
        </div>
        <div className="t-item" style={{ '--position': '7' }}>
          <div
            className="t-card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)'}}
          > <h5>Tomiwa</h5>
            <p>Solus made our brand feel craft without being pretentious</p>
            
          </div>
        </div>
        <div className="t-item" style={{ '--position': '8' }}>
          <div
            className="t-card"
            style={{background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)' }}
          >
            <h5>Linda Christina., Blogger</h5>
            <p>Calm, balanced, exactly what our brand needed. They even fixed things I didn't know were wrong.</p>
          </div>
        </div>
        <div className="t-item" style={{ '--position': '9' }}>
          <div
            className="t-card"
            style={{ background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)'}}
          >
            <h5>Oladele Esther, Entrepreneur</h5>
            <p>My old website screamed 2010. Now it screams 'hire me.' Best investment I've made this year</p>
            
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Testi