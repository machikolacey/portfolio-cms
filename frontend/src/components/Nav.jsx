import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const location = useLocation()

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className={`nav-item nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link className={`nav-item nav-link ${location.pathname === '/overview' ? 'active' : ''}`} to="/overview">Overview</Link>
            <Link className={`nav-item nav-link ${location.pathname === '/experiences' ? 'active' : ''}`} to="/experiences">Experiences</Link>
            <Link className={`nav-item nav-link ${location.pathname === '/skill-set' ? 'active' : ''}`} to="/skill-set">Skills</Link>
            <Link className={`nav-item nav-link ${location.pathname === '/education-interests' ? 'active' : ''}`} to="/education-interests">Education/ Interests</Link>
            <a className="nav-item nav-link" href="/assets/documents/CV_M_Kimura_current.pdf" target="_blank">Download CV</a>
          </div>
        </div>
      </div>
    </nav>
  )
}