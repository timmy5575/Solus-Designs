import React from 'react'
import './skill.css'

const Skill = () => {
  const skills = [
    { name: "Adobe Photoshop", percent: 70 },
    { name: "Figma", percent: 80 },
    { name: "Canva", percent: 90 },
    { name: "Adobe Illustrator", percent: 73 }
  ];

  return (
    <section className="skills-section container">
      <div className="skills-header">
        <h2 className="section-title">
          My <span className="text-gradient">Favorite Tools</span>
        </h2>
        <p className="skills-subtitle">
          Exploring the technology and software behind my creative process.
        </p>
      </div>

      <div className="skills-container glass-panel">
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.percent}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ '--target-width': `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill