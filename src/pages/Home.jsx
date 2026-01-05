
import Hero from "../components/hero.jsx"
import Side from "../components/side.jsx"
import About from "../components/Section.jsx"
import Skill from "../components/skill.jsx"
import Sev from "../components/sev.jsx"
import ContactForm from "../components/form.jsx"
import Svg from "../components/svg.jsx"
import Testi from "../components/testi.jsx"
import Test from '../components/test.jsx'
import Footer from "../components/footer.jsx"
import "./Home.css"

const Home = () => {
  return (
<>
      <Hero />
      <Side />
      <section  id="about"> <About /> </section>
      <section  id="services"> <Sev /> </section>
      <Skill />
      
    <div className='contact'  id="contact">
      <h1>Get In <span style={{color:'rgb(200, 80, 192)', fontFamily:'cursive'}}> Touch</span></h1>
      <h3>Let's Work Together</h3>
      <p>Have a project in mind? We'd love to hear about it and discuss how we can bring your vision to life</p>
      
      <div className='ways'>

        <div className='fu'><ContactForm /></div>
        <div className='su'><Svg /></div>
      </div>
    </div>

    <div className='testimo'>
          <p>↝Clients Testimonials</p>
        <h2>The impact of <span style={{color:'rgb(200, 80, 192)', fontFamily:'cursive'}}> My Work </span></h2>
<Testi />
<Test />
</div>
 <Footer />
</>
  );
};

export default Home;
