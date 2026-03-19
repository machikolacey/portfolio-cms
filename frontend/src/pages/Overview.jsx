import React from 'react'

export default function Overview() {
  return (
    <section className="container-fluid">
      <div className="container">
        <h2 className="heading">Overview</h2>
        <div className="row">
          <div className="col-md-3 bg-color-work-history section-column">
            <img src="/assets/images/profile-image.jpg" alt="Profile Image - Overview" />
          </div>
          <div className="col-md-9 bg-color-three-reasons">
            <p>I am a full-stack web developer based in Hove, UK, with over 19 years of professional experience building websites and web applications.</p>
            <p>My expertise spans PHP, JavaScript, React, Python, and MySQL. I have worked across a variety of sectors, from e-commerce and insurance to veterinary education and AI training.</p>
            <p>I am bilingual in English and Japanese, which has allowed me to contribute to multilingual projects and communicate effectively across international teams.</p>
          </div>
        </div>
      </div>
    </section>
  )
}