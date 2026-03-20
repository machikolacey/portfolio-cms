import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API = 'https://web-production-8f62.up.railway.app'

export default function Overview() {
  const [siteContent, setSiteContent] = useState(null)

  useEffect(() => {
    axios.get(`${API}/api/site-content/`)
      .then(res => {
        if (res.data.length > 0) setSiteContent(res.data[0])
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <section className="container-fluid">
      <div className="container">
        <h2 className="heading">Overview</h2>
        <div className="row">
          <div className="col-md-3 bg-color-work-history section-column">
            <img
              src={siteContent?.overview_image || '/assets/images/profile-image.jpg'}
              alt="Profile Image - Overview"
            />
          </div>
          <div className="col-md-9 bg-color-three-reasons">
            {(siteContent?.overview_text || 'I am a full-stack web developer based in Hove, UK, with over 19 years of professional experience building websites and web applications.')
              .split('\n')
              .map((line, i) => (
                <p key={i}>{line}</p>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}