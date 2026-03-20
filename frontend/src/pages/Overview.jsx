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
            <p>I love solving problems and I'm genuinely motivated by getting things done — no matter what it takes.</p>
            <p>As a full-stack web developer with 17+ years of experience, I'm comfortable across both front-end and back-end, and I'm the kind of developer who steps up when something needs doing.</p>
            <p>At Storm12 Ltd, I architected bespoke CMS solutions from scratch using PHP, JavaScript, jQuery, Ajax and MySQL, taking full ownership from brief to deployment. I took the CMS further — building a modular, block-based admin system that empowers non-technical users to manage content with ease. I also implemented Ajax-powered search, cookie-based user personalisation, and custom animations using Particle.js and JavaScript, enabling clients to deliver visually engaging, dynamic web experiences. Internal tools were built using React.</p>
            <p>At Calculus Software Solutions, my Magento theme designs and custom animations consistently earned strong client feedback — I developed a Magento 2 module enabling end-users to customise cart options, and also built proprietary extensions for the company's own product line.</p>
            <p>At FAT Promotions Ltd, I built bespoke CMS solutions from scratch, taking full ownership from brief to deployment.</p>
            <p>At Professional Insurance Agents, I pivoted into mobile app development, building applications for iPhone, Android and BlackBerry, learning Java and Objective-C to complete the project.</p>
            <p>At Camlock Systems Ltd, I inherited a half-finished multilingual website of over 2,000 pages, built on VB Script — a language I'd never used before. I taught myself and delivered it.</p>
            <p>I care deeply about responsive design and always test thoroughly across devices. I understand what clients actually want, not just what they ask for.</p>
            <p>Currently expanding into AI and Data Analytics — Professional Certificate in Data Analytics &amp; AI, Code Institute, November 2025.</p>
            <p>My goal is always the same: the best solution for the end-user.</p>          </div>
        </div>
      </div>
    </section>
  )
}