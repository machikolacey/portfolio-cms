import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get('https://web-production-8f62.up.railway.app/api/projects/')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Machiko Lacey-Kimura | Web Developer</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        {projects.map(project => (
          <div key={project.id} style={{ width: '250px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
            {project.image && <img src={project.image} alt={project.name} style={{ width: '100%' }} />}
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer">View website</a>
            ) : (
              <span>Links available on request</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}