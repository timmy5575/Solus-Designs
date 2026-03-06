import React, { useState } from 'react';
import './projects.css';
import Img1 from '../assets/imgp/img21.jpg';
import Img2 from '../assets/imgp/img2.jpg';
import Img3 from '../assets/imgp/img23.png';
import Img4 from '../assets/imgp/img4.jpg';
import Img5 from '../assets/imgp/img15.jpg';
import Img6 from '../assets/imgp/img6.jpg';
import Img7 from '../assets/imgp/img7.jpg';
import Img8 from '../assets/imgp/img8.jpg';
import Img9 from '../assets/imgp/img9.jpg';
import Img10 from '../assets/imgp/img10.jpg';
import Img11 from '../assets/imgp/img11.jpg';
import Img12 from '../assets/imgp/img18.jpg';
import Img13 from '../assets/imgp/img13.jpg';
import Img14 from '../assets/imgp/img24.png';
import Img15 from '../assets/imgp/img22.png';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    Img1, Img2, Img3, Img4, Img5,
    Img6, Img7, Img8, Img9, Img10,
    Img11, Img12, Img13, Img14, Img15
  ];

  const handleImageClick = (src) => {
    setSelectedImage(src);
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    // Restore scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="projects-page-container">
      {/* Header Section */}
      <section className="projects-hero section-padding text-center">
        <div className="container">
          <h1 className="projects-title">My <span className="text-gradient">Portfolio</span></h1>
          <p className="projects-subtitle">A collection of my recent work and professional journey.</p>
        </div>
      </section>

      {/* Resume Section */}
      <section className="resume-section container section-padding">
        <div className="resume-grid glass-panel">

          <div className="resume-sidebar">
            <h2 className="resume-name">Oluwafemi Samuel Oyewole</h2>
            <div className="resume-contact-info">
              <p><strong>Email:</strong> Therealfemi.oyewolegcfr@yahoo.com</p>
              <p><strong>Phone:</strong> 09064690659, 08084025402</p>
            </div>

            <div className="resume-block mt-lg">
              <h3 className="resume-heading">Certificates</h3>
              <ul className="resume-list">
                <li>Google UX Design Professional Certificate</li>
                <li>Professional Diploma of Virtual Executive Assistant</li>
              </ul>
            </div>
          </div>

          <div className="resume-main">
            <div className="resume-block">
              <h3 className="resume-heading">Profile</h3>
              <p className="resume-text">
                Multidisciplinary Designer specializing in UI/UX Design, Graphics Design, and Brand Identity.
                I blend strong visual storytelling with user-centered thinking to create intuitive digital experiences,
                compelling graphics, and cohesive brand systems. My approach bridges business
                objectives with user needs through research-driven design and thoughtful execution.
              </p>
            </div>

            <div className="resume-block">
              <h3 className="resume-heading">Technical Skills</h3>
              <div className="skills-tags">
                <span className="skill-tag">UI/UX Design</span>
                <span className="skill-tag">Graphics Design</span>
                <span className="skill-tag">Brand Identity</span>
                <span className="skill-tag">Typography</span>
                <span className="skill-tag">Photoshop</span>
                <span className="skill-tag">Illustrator</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Framer</span>
              </div>
            </div>

            <div className="resume-block">
              <h3 className="resume-heading">Experience</h3>
              <div className="experience-item">
                <h4>Freelance Designer <span className="text-muted text-sm ml-auto">01/2020 – Present</span></h4>
                <ul className="resume-list mt-sm">
                  <li>Created comprehensive Brand Identity systems for diverse clients—logos, color palettes, typography guidelines, and brand books.</li>
                  <li>Designed high-fidelity UI/UX prototypes for mobile and web applications with a focus on intuitive navigation and modern aesthetics.</li>
                  <li>Produced engaging graphics for social media, marketing materials, and digital campaigns that effectively communicated client messages.</li>
                  <li>Conducted user research and usability testing to refine designs, resulting in improved user satisfaction.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section container section-padding">
        <div className="text-center mb-xl">
          <h2 className="section-title">Selected <span className="text-gradient">Works</span></h2>
        </div>

        <div className="portfolio-gallery">
          {images.map((src, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => handleImageClick(src)}
            >
              <img src={src} alt={`Project work ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <button className="image-modal-close" onClick={closeImageModal}>
            ×
          </button>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full screen project" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
