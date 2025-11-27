import React from 'react'

function Contacts() {
  return (
    <section id="contacts" className="section">
      <div className="section__text">
        <h1 className="title">Contacts</h1>
      </div>
      <div className="contacts-buttons">
        <a href="mailto:pradyun.bachu@gmail.com" className="contact-btn email-btn">
          Email
        </a>
        <a
          href="https://github.com/pradyunbachu"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn github-btn"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/pradyun-bachu/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn linkedin-btn"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contacts

