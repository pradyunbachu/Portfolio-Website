import React, { useState } from 'react'

const skillsData = {
  'technical-languages': [
    { icon: 'fab fa-java', name: 'Java' },
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fab fa-js', name: 'JavaScript' },
    { icon: 'fab fa-html5', name: 'HTML/CSS' },
    { icon: 'fas fa-chart-area', name: 'R' },
  ],
  'frameworks': [
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fab fa-python', name: 'Flask' },
    { icon: 'fas fa-vial', name: 'JUnit' },
  ],
  'developer-tools': [
    { icon: 'fab fa-git-alt', name: 'Git' },
    { icon: 'fab fa-google', name: 'Google Suite' },
    { icon: 'fab fa-microsoft', name: 'Microsoft Office' },
    { icon: 'fas fa-table', name: 'Excel' },
    { icon: 'fas fa-chart-bar', name: 'Tableau' },
    { icon: 'fas fa-cube', name: 'Autodesk Inventor' },
    { icon: 'fas fa-cog', name: 'vCarve Pro' },
    { icon: 'fas fa-cube', name: 'Onshape' },
    { icon: 'fas fa-code', name: 'VS Code' },
    { icon: 'fab fa-microsoft', name: 'Visual Studio' },
    { icon: 'fab fa-java', name: 'IntelliJ' },
    { icon: 'fab fa-java', name: 'Eclipse' },
    { icon: 'fab fa-google', name: 'Google Colab' },
    { icon: 'fas fa-database', name: 'SQL' },
  ],
  'libraries': [
    { icon: 'fab fa-python', name: 'Pandas' },
    { icon: 'fab fa-python', name: 'NumPy' },
    { icon: 'fas fa-chart-line', name: 'Matplotlib' },
  ],
  'languages': [
    { icon: 'fas fa-globe', name: 'English' },
    { icon: 'fas fa-globe', name: 'Spanish' },
    { icon: 'fas fa-globe', name: 'Telugu' },
  ],
  'interests': [
    { icon: 'fas fa-music', name: 'Music' },
    { icon: 'fas fa-football', name: 'Fantasy Football' },
    { icon: 'fas fa-club', name: 'Poker' },
    { icon: 'fas fa-walking', name: 'Walking' },
    { icon: 'fas fa-dumbbell', name: 'Gym' },
  ],
}

const categories = [
  { id: 'technical-languages', name: 'Technical Languages', angle: 0 },
  { id: 'frameworks', name: 'Frameworks', angle: 60 },
  { id: 'developer-tools', name: 'Developer Tools', angle: 120 },
  { id: 'libraries', name: 'Libraries', angle: 180 },
  { id: 'languages', name: 'Languages', angle: 240 },
  { id: 'interests', name: 'Interests', angle: 300 },
]

function Skills() {
  const [activeCategory, setActiveCategory] = useState('technical-languages')

  const showCategory = (categoryId) => {
    setActiveCategory(categoryId)
  }

  return (
    <div className="about-card skills-card">
      <h2 className="about-title">Skills &amp; Interests</h2>
      <div className="skills-container">
        <div className="skills-category-buttons">
          <div className="circular-layout">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-circle ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => showCategory(category.id)}
                data-category={category.id}
                style={{ '--angle': `${category.angle}deg` }}
              >
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="skills-display-area">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`skills-category ${activeCategory === category.id ? 'active' : ''}`}
              id={category.id}
            >
              <div className="skills-grid">
                {skillsData[category.id].map((skill, index) => (
                  <div key={index} className="skill-card">
                    {skill.type === 'image' ? (
                      <>
                        <img
                          src={skill.src}
                          alt={skill.name}
                          className="skill-logo"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            const fallback = e.target.nextElementSibling
                            if (fallback) fallback.style.display = 'block'
                          }}
                        />
                        <i className={`${skill.fallback} skill-fallback`} style={{ display: 'none' }}></i>
                      </>
                    ) : (
                      <i className={skill.icon}></i>
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills

