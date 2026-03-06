
import Hero from "../components/hero.jsx"
import Side from "../components/side.jsx"
import About from "../components/Section.jsx"
import Skill from "../components/skill.jsx"
import Sev from "../components/sev.jsx"
import ContactForm from "../components/form.jsx"
import Svg from "../components/svg.jsx"
import Testi from "../components/testi.jsx"
import "./Home.css"

const Home = () => {
  return (
    <>
      <Hero />
      <Side />
      <section id="about"> <About /> </section>
      <section id="services"> <Sev /> </section>
      <Skill />

      <div className='contact container section-padding' id="contact">
        <div className="contact-header text-center">
          <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
          <p className="contact-subtitle">Let's Work Together</p>
          <p className="contact-description">Have a project in mind? We'd love to hear about it and discuss how we can bring your vision to life.</p>
        </div>

        <div className='contact-content grid-2'>
          <div className='contact-form-wrapper'><ContactForm /></div>
          <div className='contact-social-wrapper'><Svg /></div>
        </div>
      </div>

      <div className='testimo'>
        <Testi />
      </div>
    </>
  );
};

export default Home;
