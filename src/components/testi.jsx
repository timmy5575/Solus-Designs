import React from 'react'
import './testi.css'

const Testi = () => {
  const testimonials = [
    { name: "Jasmine", feedback: "The packaging redesign was a game changer." },
    { name: "Ryan P., App Developer", feedback: "UI/UX work was seamless. They understood our users better than we did, honestly." },
    { name: "Linda Christina, Blogger", feedback: "Calm, balanced, exactly what our brand needed. They even fixed things I didn't know were wrong." },
    { name: "Natasha, E-commerce Store Owner", feedback: "Product photos and layout refresh = 45% more sales in two months. Do the math." },
    { name: "Ebuka, Podcaster", feedback: "Album art that makes people click. Simple as that. Worth every kobo." },
    { name: "Sarah, Boutique Owner", feedback: "He nailed our rebrand in one go. The logo feels like us now. Can't recommend them enough!" },
    { name: "Tomiwa", feedback: "Solus made our brand feel craft without being pretentious." },
    { name: "Oladele Esther, Entrepreneur", feedback: "My old website screamed 2010. Now it screams 'hire me.' Best investment I've made this year." },
    { name: "Tayo from CreditPadi", feedback: "Fast turnaround, zero drama. Solus just gets it. Our landing page converts like crazy now." },
    { name: "Michelle Omatseye, Events Planner", feedback: "I loved the invitation card that designed. He captured exactly what I couldn't put into words." },
    { name: "Ruth Odessa", feedback: "New menu design increased our sales by 30%. Not kidding. These folks know their stuff." },
  ];

  // We duplicate the array to create a seamless infinite scroll effect
  const multipliedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header container">
        <p className="testimonials-eyebrow">↝ Clients Testimonials</p>
        <h2 className="section-title">
          The impact of <span className="text-gradient">My Work</span>
        </h2>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {multipliedTestimonials.map((t, index) => (
            <div key={index} className="testimonial-card glass-panel">
              <svg className="quote-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11L8 15H6L8 11V7H12V11H10ZM18 11L16 15H14L16 11V7H20V11H18Z" fill="var(--primary)" fillOpacity="0.5" />
              </svg>
              <p className="testimonial-text">"{t.feedback}"</p>
              <h5 className="testimonial-author">- {t.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testi