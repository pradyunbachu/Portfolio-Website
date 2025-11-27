import React, { useState } from 'react'
import Skills from './Skills'

function About() {
  return (
    <section id="about" className="section">
      <h1 className="title">About Me!</h1>
      <div className="about-container">
        <div className="about-card education-card">
          <h2 className="about-title">Education</h2>
          <div className="about-edu-details">
            <div className="university-name">
              The University of Wisconsin - Madison
            </div>
            <div className="degree-detail">
              B.S. Computer Science &amp; Economics with Math Emphasis (2028)
            </div>
            <div className="hs-name">The Peddie School</div>
            <div className="degree-detail">High School Diploma</div>
          </div>
        </div>
        <Skills />
      </div>
    </section>
  )
}

export default About

