import React from 'react'

export default function EducationInterests() {
  return (
    <section className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="heading">Education/ Interests</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-12 bg-color-work-history section-column">
            <div className="history-items">
              <div className="timeline-item" data-dates="11/2025">
                <h4>Code Institute</h4>
                <p>Professional Certificate in Data Analytics & AI</p>
              </div>
              <div className="timeline-item" data-dates="03/2020 - 03/2021">
                <h4>Code Institute</h4>
                <p>Diploma in Software Development (Edinburgh Napier University)</p>
              </div>
              <div className="timeline-item" data-dates="04/2005 - 03/2007">
                <h4>LTC College</h4>
                <p>Diploma in Web Technology and E-Commerce</p>
              </div>
              <div className="timeline-item" data-dates="04/1992 - 03/1996">
                <h4>Himeji Dokkyo University</h4>
                <p>B.A. in Linguistics</p>
              </div>
              <div className="timeline-item" data-dates="04/1989 - 03/1992">
                <h4>Shizuoka Girls School</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 bg-color-three-reasons">
            <fieldset>
              <legend>Code Institute - Professional Certificate in Data Analytics & AI</legend>
              <div className="row">
                <div className="col-sm-4">
                  <img src="/assets/images/education-code-institute.png" alt="" />
                </div>
                <div className="col-sm-8">
                  <p>Issued November 2025 | <a href="https://www.credential.net/a85adb6b-a08d-4a15-84ba-cdf807ba753e#acc.LK5pkc8P" target="_blank" rel="noreferrer">View credential</a></p>
                  <ul>
                    <li>Data Analysis & Visualisation</li>
                    <li>Machine Learning Fundamentals</li>
                    <li>Python for Data Science</li>
                    <li>AI Applications</li>
                  </ul>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Code Institute - Diploma in Software Development</legend>
              <div className="row">
                <div className="col-sm-4">
                  <img src="/assets/images/education-code-institute.png" alt="" />
                </div>
                <div className="col-sm-8">
                  <p>Issued May 2021 | <a href="https://credential.net/586f7d11-f5c1-4733-b4b9-5e8ecd6c489a#gs.7n7t9n" target="_blank" rel="noreferrer">View credential</a></p>
                  <ul>
                    <li>HTML & CSS Fundamentals</li>
                    <li>JavaScript Fundamentals</li>
                    <li>Python Fundamentals</li>
                    <li>Data Centric Development (Node.js)</li>
                  </ul>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Interests</legend>
              <div className="row">
                <div className="col-sm-8">
                  <h3>Piano</h3>
                  <p>I play piano since age of 6. I've started in Classical music, now I am playing Jazz.</p>
                  <h3>Synthesizer</h3>
                  <p>I play synthesizer in a rock band in Brighton. My machines are Korg Microkorg and Roland JUNO-DS.</p>
                  <h3>Stars</h3>
                  <p>I like watching stars.</p>
                  <h3>British pop music</h3>
                  <p>I am a huge fan of Pet Shop Boys and Erasure.</p>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </section>
  )
}