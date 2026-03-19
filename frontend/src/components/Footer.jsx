import React from 'react'

export default function Footer() {
  return (
<footer>
  <div className="container">
    <div id="footer-details" className="row">
      <div className="col-sm-4 col-xs-6">
        <h5 className="uppercase general-sub">About</h5>
        <ul className="contact">
          <li><a href="https://github.com/machikolacey" target="_blank" rel="noreferrer">
            <i className="fa fa-github"></i>Github</a>
          </li>
          <li><a href="https://machikolacey.com" target="_blank" rel="noreferrer">
            <i className="fa fa-tv"></i>Website</a>
          </li>
        </ul>
      </div>
      <div className="col-sm-4 col-xs-6">
        <h5 className="uppercase general-sub">Contact</h5>
        <ul className="contact">
          <li><a href="/assets/documents/CV_M_Kimura_current.pdf" target="_blank" rel="noreferrer">
            <i className="fa fa-download" aria-hidden="true"></i>Download CV</a>
          </li>
          <li><a href="mailto:machiko_kimura_lacey@yahoo.co.uk">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>Email Address</a>
          </li>
        </ul>
      </div>
      <div className="col-sm-4 col-xs-6">
        <h5 className="uppercase general-sub">Social</h5>
        <ul className="contact">
          <li className="list-inline-item">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/machiko-lacey-kimura-79a56580/">
              <i className="fa fa-linkedin" aria-hidden="true"></i>LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-12 text-center">
        <p style={{color: '#8b949e', fontSize: '0.85rem'}}>
          This website is built with React and Python Django. | Links available on request.
        </p>
      </div>
    </div>
  </div>
</footer>
  )
}

