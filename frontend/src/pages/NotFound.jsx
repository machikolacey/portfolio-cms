import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-fluid">
      <div className="container page-404">
        <div className="row">
          <div className="col-md-6">
            <img src="/assets/images/mario.jpg" alt="Mario the cat" className="mario-photo" />
          </div>
          <div className="col-md-6">
            <h1>404</h1>
            <p>Oops! Looks like this page has gone on a cat nap. 🐱</p>
            <p>The page you're looking for has wandered off somewhere — just like Mario after his dinner.</p>
            <Link to="/" className="btn btn-primary">Take me home</Link>
          </div>
        </div>
      </div>
    </section>
  )
}