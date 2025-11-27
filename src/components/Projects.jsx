import React, { useState } from 'react'

const projects = [
  {
    id: 'redline',
    name: 'Redline',
    description: 'This is an AI Damage Detection software that estimates the cost for car repair simply given a picture of the car, and a few more additional details. It also includes an AI chatbot that can further help with more specific issues the user has questions about.',
    github: 'https://github.com/UniqueRed/badger-buildhacks',
    youtube: 'https://www.youtube.com/watch?v=6G34sUlco60',
  },
  {
    id: 'econ',
    name: 'UN NDC AI Model',
    description: 'A machine learning model developed to analyze and predict Nationally Determined Contributions (NDCs) under the United Nations Framework Convention on Climate Change. This project combines data science and environmental economics to help understand and predict climate action commitments.',
    github: 'https://github.com/pradyunbachu/UN_NDCAIModel',
  },
  {
    id: 'portfolio',
    name: 'Portfolio Website',
    description: 'This is my Portfolio website where you can find everything about me!',
    github: 'https://github.com/pradyunbachu/Portfolio-Website',
  },
  {
    id: 'kitchen',
    name: 'Kitchen Pantry',
    description: 'This is my Kitchen Pantry box. It allows users to edit their kitchen pantry to see what they have and don\'t have. Users can edit the pantry as they wish.',
    github: 'https://github.com/pradyunbachu/KitchenPantry',
  },
]

function Projects() {
  const [openPopup, setOpenPopup] = useState(null)

  const openProjectPopup = (projectId) => {
    setOpenPopup(projectId)
  }

  const closePopup = () => {
    setOpenPopup(null)
  }

  const handlePopupClick = (e) => {
    if (e.target.id === openPopup + '-popup') {
      closePopup()
    }
  }

  return (
    <section id="projects" className="section">
      <div className="section__text">
        <h1 className="title">Projects</h1>
      </div>
      <div className="about-subsection projects-box">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item"
            onClick={() => openProjectPopup(project.id)}
          >
            {project.name}
          </div>
        ))}
      </div>

      {projects.map((project) => (
        <div
          key={project.id}
          id={`${project.id}-popup`}
          className={`project-popup ${openPopup === project.id ? 'open' : ''}`}
          onMouseDown={handlePopupClick}
        >
          <div className="project-popup-content">
            <span className="close-popup" onClick={closePopup}>&times;</span>
            <h2>{project.name}</h2>
            <div style={{ marginTop: '1rem', color: '#e0e0e0' }}>
              <p>{project.description}</p>
              <p style={{ marginTop: '1.2rem' }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  View {project.name} on GitHub
                </a>
              </p>
              {project.youtube && (
                <p style={{ marginTop: '1rem' }}>
                  <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                    Watch Demo on YouTube
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Projects

