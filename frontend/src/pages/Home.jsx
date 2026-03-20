import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API = 'https://web-production-8f62.up.railway.app'

export default function Home() {
  const [projects, setProjects] = useState([])
  const [siteContent, setSiteContent] = useState(null)

  useEffect(() => {
    axios.get(`${API}/api/projects/`)
      .then(res => setProjects(res.data))
      .catch(err => console.error(err))

    axios.get(`${API}/api/site-content/`)
      .then(res => {
        if (res.data.length > 0) setSiteContent(res.data[0])
      })
      .catch(err => console.error(err))
  }, [])

  const rows = []
  for (let i = 0; i < projects.length; i += 4) {
    rows.push(projects.slice(i, i + 4))
  }

  return (
    <>
      <section className="container-fluid">
        <div className="container main-content">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="d-inline-block">Portfolio</h2>
              {rows.map((row, i) => (
                <div className="home-row" key={i}>
                  <div className="row">
                    {row.map(project => (
                      <div className="col-lg-3 col-sm-6 col-xs-6 card" key={project.id}>
                        <img src={project.image} alt={project.name} />
                        <h4>{project.name}<br />({project.description})</h4>
                        <div className="action-buttons">
                          {project.link
                            ? <a href={project.link} target="_blank" rel="noreferrer">View website</a>
                            : <span>Links available on request</span>
                          }
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid" style={{padding: '60px 0'}}>
        <div className="container">
          <div className="row" style={{alignItems: 'center'}}>
            <div className="col-md-4 text-center">
              <img
                src={siteContent?.profile_image || '/assets/images/profile-image2.jpg'}
                alt="Machiko Kimura"
                style={{
                  width: '100%',
                  maxWidth: '320px',
                  borderRadius: '8px',
                  border: '0.5px solid #21262d',
                  boxShadow: '2px 2px 20px rgba(247,150,33,0.1)'
                }}
              />
            </div>
            <div className="col-md-8" style={{paddingLeft: '40px'}}>
              <h2 className="heading">About Me</h2>
              <p style={{fontSize: '1.2rem', lineHeight: '1.8', color: '#e6edf3'}}>
                {siteContent?.about_text || 'With 19+ years of full-stack experience, I build it all. Bespoke CMS platforms, e-commerce solutions, AI-powered apps, and everything in between. Animations, interactions, pixel-perfect responsive design. If you can imagine it, I can build it.'}
              </p>
              <div style={{marginTop: '20px'}}>
                <a href="/experiences" className="btn btn-primary" style={{marginRight: '10px'}}>View Experience</a>
                <a href="/assets/documents/CV_M_Kimura_current.pdf" className="btn btn-primary" target="_blank" rel="noreferrer">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid" style={{padding: '40px 0', background: '#161b22', marginTop: '40px'}}>
        <div className="container">
          <h2 className="heading">Skills</h2>
          <div className="row">
            {[
              { name: 'PHP', level: '90%', color: '#f79621' },
              { name: 'JavaScript', level: '98%', color: '#f79621' },
              { name: 'React', level: '60%', color: '#58a6ff' },
              { name: 'Python', level: '95%', color: '#3fb950' },
              { name: 'MySQL', level: '95%', color: '#f79621' },
              { name: 'Laravel', level: '80%', color: '#3fb950' },
              { name: 'Django', level: '65%', color: '#3fb950' },
              { name: 'CSS/SCSS', level: '95%', color: '#58a6ff' },
            ].map((skill, i) => (
              <div className="col-lg-3 col-sm-6" key={i} style={{marginBottom: '20px'}}>
                <div style={{
                  background: '#0d1117',
                  border: '0.5px solid #21262d',
                  borderRadius: '8px',
                  padding: '20px',
                }}>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
                    <span style={{color: '#e6edf3', fontWeight: '700'}}>{skill.name}</span>
                    <span style={{color: skill.color, fontSize: '0.85rem'}}>{skill.level}</span>
                  </div>
                  <div style={{background: '#21262d', borderRadius: '4px', height: '6px'}}>
                    <div style={{
                      width: skill.level,
                      height: '100%',
                      background: skill.color,
                      borderRadius: '4px',
                    }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}