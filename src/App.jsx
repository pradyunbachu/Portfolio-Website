import React, { useState } from 'react'

function App() {
  const [showRedlinePopup, setShowRedlinePopup] = useState(false)
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#fafafa',
      margin: 0,
      padding: 0
    }}>
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px'
      }}>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '18px',
          fontWeight: 700,
          color: '#000000'
        }}>
          Pradyun Bachu
        </div>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '14px',
          fontWeight: 400,
          color: '#000000'
        }}>
          Fullstack Developer, Economist, and Student
        </div>
      </div>

      <div style={{
        position: 'absolute',
        top: '100px',
        left: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '18px',
          fontWeight: 700,
          color: '#000000'
        }}>
          Education
        </div>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '14px',
          fontWeight: 400,
          color: '#000000'
        }}>
          University of Wisconsin-Madison
        </div>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '14px',
          fontWeight: 400,
          color: '#000000'
        }}>
          B.S. Computer Science, Economics with Math Emphasis
        </div>
      </div>

      <div style={{
        position: 'absolute',
        top: '250px',
        left: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '18px',
          fontWeight: 700,
          color: '#000000'
        }}>
          Projects
        </div>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '14px',
          fontWeight: 400,
          color: '#000000',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px'
        }}>
          <div>NFL Game Predictor (COMING SOON)</div>
          <div style={{
            fontSize: '12px',
            color: '#666666',
            fontStyle: 'italic'
          }}>
            Python, Pandas, NumPy, Matplotlib
          </div>
        </div>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '14px',
          fontWeight: 400,
          color: '#000000',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px'
        }}>
          <div 
            style={{
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
            onClick={() => setShowRedlinePopup(true)}
          >
            Redline
          </div>
          <div style={{
            fontSize: '12px',
            color: '#666666',
            fontStyle: 'italic'
          }}>
            Python, React, YOLOv8, Groq LLM, OpenCV
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        top: '400px',
        left: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '18px',
          fontWeight: 700,
          color: '#000000'
        }}>
          Skills
        </div>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '14px',
          fontWeight: 700,
          color: '#000000',
          marginTop: '5px'
        }}>
          Programming Languages
        </div>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '12px',
          fontWeight: 400,
          color: '#666666'
        }}>
          Java, Python, R, JavaScript, HTML/CSS
        </div>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '14px',
          fontWeight: 700,
          color: '#000000',
          marginTop: '5px'
        }}>
          Frameworks
        </div>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '12px',
          fontWeight: 400,
          color: '#666666'
        }}>
          React, Flask, JUnit, JavaFX
        </div>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '14px',
          fontWeight: 700,
          color: '#000000',
          marginTop: '5px'
        }}>
          Developer Tools
        </div>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '12px',
          fontWeight: 400,
          color: '#666666',
          maxWidth: '400px',
          lineHeight: '1.4'
        }}>
          Git, Google Suite, Microsoft Office, Tableau, Autodesk Inventor, vCarve Pro, Onshape, VS Code, Visual Studio, IntelliJ, Eclipse, Google Colab
        </div>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '14px',
          fontWeight: 700,
          color: '#000000',
          marginTop: '5px'
        }}>
          Libraries
        </div>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '12px',
          fontWeight: 400,
          color: '#666666'
        }}>
          Pandas, NumPy, Matplotlib
        </div>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '14px',
          fontWeight: 700,
          color: '#000000',
          marginTop: '5px'
        }}>
          Interests
        </div>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '12px',
          fontWeight: 400,
          color: '#666666'
        }}>
          Music, Fantasy Football, Poker, Madden, NBA 2K, Gym
        </div>
      </div>
      
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        display: 'flex',
        gap: '15px',
        alignItems: 'center'
      }}>
        <a
          href="/Bachu_Pradyun_Resume (1).pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            color: '#000000',
            textDecoration: 'none',
            padding: '8px 16px',
            border: '1px solid #000000',
            borderRadius: '4px',
            transition: 'all 0.2s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#000000'
            e.currentTarget.style.color = '#fafafa'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = '#000000'
          }}
        >
          Resume
        </a>
        <a 
          href="https://github.com/pradyunbachu" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            cursor: 'pointer',
            color: '#24292e',
            textDecoration: 'none',
            fontSize: '24px',
            transition: 'transform 0.2s',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <i className="fab fa-github"></i>
        </a>
        <a 
          href="mailto:pradyun.bachu@gmail.com"
          style={{ 
            cursor: 'pointer',
            color: '#ea4335',
            textDecoration: 'none',
            fontSize: '24px',
            transition: 'transform 0.2s',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a 
          href="https://www.linkedin.com/in/pradyun-bachu/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            cursor: 'pointer',
            color: '#0077b5',
            textDecoration: 'none',
            fontSize: '24px',
            transition: 'transform 0.2s',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      {showRedlinePopup && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
          onClick={() => setShowRedlinePopup(false)}
        >
          <div 
            style={{
              backgroundColor: '#fafafa',
              padding: '30px',
              borderRadius: '4px',
              maxWidth: '400px',
              width: '90%',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                color: '#000000',
                margin: 0
              }}>
                Redline
              </h2>
              <button
                onClick={() => setShowRedlinePopup(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#000000',
                  padding: 0,
                  lineHeight: 1
                }}
              >
                &times;
              </button>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px'
            }}>
              <a 
                href="https://github.com/UniqueRed/badger-buildhacks" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '14px',
                  color: '#000000',
                  textDecoration: 'underline',
                  display: 'block'
                }}
              >
                GitHub
              </a>
              <a 
                href="https://youtu.be/6G34sUlco60" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '14px',
                  color: '#000000',
                  textDecoration: 'underline',
                  display: 'block'
                }}
              >
                Video
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
