import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get('https://web-production-8f62.up.railway.app/api/projects/')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err))
  }, [])

  const rows = []
  for (let i = 0; i < projects.length; i += 4) {
    rows.push(projects.slice(i, i + 4))
  }

  return (
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
  )
}