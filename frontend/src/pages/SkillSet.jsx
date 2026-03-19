import React from 'react'

export default function SkillSet() {
  return (
    <section className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="heading">Skills</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-12 bg-color-work-history section-column">
            <div className="history-items">
              <div className="timeline-item" data-dates="05/2024-">
                <h3>Outlier AI</h3>
                <h3>AI Coding Specialist</h3>
              </div>
              <div className="timeline-item" data-dates="01/2022-04/2025">
                <h3>Storm12 Ltd</h3>
                <h3>Web Developer</h3>
              </div>
              <div className="timeline-item" data-dates="06/2020-01/2022">
                <h3>The Webinar Vet</h3>
                <h3>Web Developer</h3>
              </div>
              <div className="timeline-item" data-dates="01/2020-03/2020">
                <h3>BigHat Digital</h3>
                <h3>Web Developer</h3>
              </div>
              <div className="timeline-item" data-dates="07/2017-01/2020">
                <h3>Calculus Software Solutions</h3>
                <h3>Web Developer</h3>
              </div>
              <div className="timeline-item" data-dates="01/2014-07/2017">
                <h3>FAT Promotions</h3>
                <h3>Web Developer</h3>
              </div>
              <div className="timeline-item" data-dates="01/2010-01/2014">
                <h3>Professional Insurance Agents</h3>
                <h3>Web Developer</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 bg-color-three-reasons">
            <div className="row progress-section">
              <div className="col">
                <h2>Javascript</h2>
                <span className="progress-type">JavaScript</span>
                <div className="progress"><div className="progress-bar" style={{width:'98%'}} role="progressbar"></div></div>
                <span className="progress-type">jQuery</span>
                <div className="progress"><div className="progress-bar bg-success" style={{width:'98%'}} role="progressbar"></div></div>
                <span className="progress-type">React</span>
                <div className="progress"><div className="progress-bar bg-success" style={{width:'60%'}} role="progressbar"></div></div>
                <span className="progress-type">Vue</span>
                <div className="progress"><div className="progress-bar bg-success" style={{width:'80%'}} role="progressbar"></div></div>

                <h2>PHP</h2>
                <span className="progress-type">PHP</span>
                <div className="progress"><div className="progress-bar" style={{width:'90%'}} role="progressbar"></div></div>
                <span className="progress-type">Laravel</span>
                <div className="progress"><div className="progress-bar bg-success" style={{width:'80%'}} role="progressbar"></div></div>

                <h2>Python</h2>
                <span className="progress-type">Python</span>
                <div className="progress"><div className="progress-bar" style={{width:'95%'}} role="progressbar"></div></div>
                <span className="progress-type">Django</span>
                <div className="progress"><div className="progress-bar bg-success" style={{width:'65%'}} role="progressbar"></div></div>

                <h2>Web Development</h2>
                <span className="progress-type">HTML</span>
                <div className="progress"><div className="progress-bar" style={{width:'95%'}} role="progressbar"></div></div>
                <span className="progress-type">CSS</span>
                <div className="progress"><div className="progress-bar" style={{width:'95%'}} role="progressbar"></div></div>
                <span className="progress-type">SCSS</span>
                <div className="progress"><div className="progress-bar bg-success" style={{width:'95%'}} role="progressbar"></div></div>

                <h2>Database</h2>
                <span className="progress-type">MySQL</span>
                <div className="progress"><div className="progress-bar" style={{width:'95%'}} role="progressbar"></div></div>
                <span className="progress-type">MongoDB</span>
                <div className="progress"><div className="progress-bar" style={{width:'75%'}} role="progressbar"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}