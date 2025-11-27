import React, { useState, useEffect, useRef } from 'react'
import linkedinIcon from '../assets/linkedin.png'
import mailIcon from '../assets/mail.png'
import githubIcon from '../assets/github.png'
import resume from '../assets/Bachu_Pradyun_Resume.pdf'

function Profile() {
  const [helloText, setHelloText] = useState('')
  const [nameText, setNameText] = useState('')
  const [descriptionText, setDescriptionText] = useState('')
  const typingTimeouts = useRef([])

  const typeText = (setter, text, speed = 50) => {
    let i = 0
    setter('')
    
    const type = () => {
      if (i < text.length) {
        setter(text.substring(0, i + 1))
        i++
        typingTimeouts.current.push(setTimeout(type, speed))
      }
    }
    type()
  }

  const clearTypingTimeouts = () => {
    typingTimeouts.current.forEach(timeout => clearTimeout(timeout))
    typingTimeouts.current = []
  }

  const startTypingAnimation = () => {
    clearTypingTimeouts()
    setHelloText('')
    setNameText('')
    setDescriptionText('')
    
    typeText(setHelloText, "Hello, I'm", 100)
    typeText(setNameText, "Pradyun Bachu", 100)
    typeText(setDescriptionText, "CS and Economics Major at The University of Wisconsin - Madison", 50)
  }

  useEffect(() => {
    startTypingAnimation()
    
    return () => {
      clearTypingTimeouts()
    }
  }, [])

  const handleButtonClick = () => {
    clearTypingTimeouts()
    setHelloText("Hello, I'm")
    setNameText("Pradyun Bachu")
    setDescriptionText("CS and Economics Major at The University of Wisconsin - Madison")
  }

  return (
    <section id="profile" className="section">
      <div className="section__text">
        <p className="section__text__p1">{helloText}</p>
        <h1 className="title">{nameText}</h1>
        <p className="section__text__p2">{descriptionText}</p>
        <div className="btn-container">
          <button
            className="btn btn-color-1"
            onClick={() => window.open(resume)}
            onMouseDown={handleButtonClick}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => {
              document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })
              handleButtonClick()
            }}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedinIcon}
            alt="My Linkedin Profile"
            className="icon"
            onClick={() => window.location.href = 'https://www.linkedin.com/in/pradyun-bachu/'}
          />
          <img
            src={mailIcon}
            alt="Email Pradyun Bachu"
            className="icon"
            onClick={() => window.location.href = 'mailto:pradyun.bachu@gmail.com'}
          />
          <img
            src={githubIcon}
            alt="My Github Profile"
            className="icon"
            onClick={() => window.location.href = 'https://github.com/pradyunbachu'}
          />
        </div>
      </div>
    </section>
  )
}

export default Profile

