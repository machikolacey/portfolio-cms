import React, { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    // Typing animation
    const phrases = [
      'skills: [PHP, React, Python];',
      'languages: ["English", "日本語"];',
      'status: "React + Python CMS done";',
      'const developer = "full-stack";',
      'experience: "18+ years";',
    ]
    let phraseIndex = 0
    let charIndex = 0
    let isDeleting = false
    const typedEl = document.getElementById('hero-typed')

    function typeLoop() {
      if (!typedEl) return
      const current = phrases[phraseIndex]
      if (!isDeleting) {
        typedEl.textContent = current.slice(0, ++charIndex)
        if (charIndex === current.length) {
          isDeleting = true
          setTimeout(typeLoop, 1800)
          return
        }
      } else {
        typedEl.textContent = current.slice(0, --charIndex)
        if (charIndex === 0) {
          isDeleting = false
          phraseIndex = (phraseIndex + 1) % phrases.length
        }
      }
      setTimeout(typeLoop, isDeleting ? 30 : 60)
    }
    setTimeout(typeLoop, 1200)

    // Particle canvas
    const canvas = document.getElementById('hero-particles')
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const hero = document.querySelector('.hero-section')
    if (!hero) return

    const mouse = { x: -999, y: -999 }
    hero.addEventListener('mousemove', function(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    })
    hero.addEventListener('mouseleave', function() {
      mouse.x = -999
      mouse.y = -999
    })

    const DOT_COUNT = 50
    const ATTRACT_RADIUS = 120
    const REPEL_FORCE = 0.25
    const RETURN_SPEED = 0.05
    const MAX_SPEED = 4
    const CONNECT_DIST = 110
    let dots = []

    function makeDots(w, h) {
      dots = Array.from({ length: DOT_COUNT }, function() {
        const vx = (Math.random() - 0.5) * 0.4
        const vy = (Math.random() - 0.5) * 0.4
        return { x: Math.random() * w, y: Math.random() * h, vx, vy, ox: vx, oy: vy, r: Math.random() * 1.8 + 0.5 }
      })
    }

    function initParticles() {
      const w = hero.offsetWidth
      const h = hero.offsetHeight
      if (w === 0 || h === 0) { setTimeout(initParticles, 100); return }
      canvas.width = w
      canvas.height = h
      makeDots(w, h)
      drawParticles()
    }

    function drawParticles() {
      const W = canvas.width
      const H = canvas.height
      ctx.clearRect(0, 0, W, H)
      dots.forEach(function(d) {
        const dx = d.x - mouse.x
        const dy = d.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < ATTRACT_RADIUS && dist > 0) {
          const force = (ATTRACT_RADIUS - dist) / ATTRACT_RADIUS
          d.vx += (dx / dist) * force * REPEL_FORCE
          d.vy += (dy / dist) * force * REPEL_FORCE
        } else {
          d.vx += (d.ox - d.vx) * RETURN_SPEED
          d.vy += (d.oy - d.vy) * RETURN_SPEED
        }
        const speed = Math.sqrt(d.vx * d.vx + d.vy * d.vy)
        if (speed > MAX_SPEED) { d.vx = (d.vx / speed) * MAX_SPEED; d.vy = (d.vy / speed) * MAX_SPEED }
        d.x += d.vx
        d.y += d.vy
        if (d.x < 0 || d.x > W) { d.vx *= -1; d.ox *= -1 }
        if (d.y < 0 || d.y > H) { d.vy *= -1; d.oy *= -1 }
        const glow = dist < ATTRACT_RADIUS ? 1 - dist / ATTRACT_RADIUS : 0
        const alpha = 0.4 + glow * 0.5
        const size = d.r + glow * 2
        ctx.beginPath()
        ctx.arc(d.x, d.y, size, 0, Math.PI * 2)
        ctx.fillStyle = glow > 0.1 ? `rgba(247,190,60,${alpha})` : `rgba(247,150,33,${alpha})`
        ctx.fill()
      })
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = `rgba(247,150,33,${0.2 * (1 - dist / CONNECT_DIST)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      if (mouse.x > 0) {
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, ATTRACT_RADIUS, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(247,150,33,0.08)'
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(247,150,33,0.6)'
        ctx.fill()
      }
      requestAnimationFrame(drawParticles)
    }
    setTimeout(initParticles, 50)
  }, [])

  return (
    <header className="hero-section">
      <div className="hero-image-right"></div>
      <div className="hero-bg-grid"></div>
      <div className="hero-glow"></div>
      <div className="hero-scanline"></div>
      <canvas id="hero-particles"></canvas>
      <div className="container hero-container">
        <div className="hero-border-left"></div>
        <div className="hero-content">
          <p className="hero-label">
            <span className="live-dot"></span>Full-Stack Web Developer &amp; Software Engineer
          </p>
          <h1 className="hero-name">Machiko <span>Kimura</span></h1>
          <p className="hero-tagline">Where Logic Meets Creativity</p>
          <div className="hero-typing-wrap">
            <span id="hero-typed"></span><span className="hero-cursor"></span>
          </div>
          <div className="hero-tags">
            <span className="hero-tag">PHP</span>
            <span className="hero-tag">JavaScript</span>
            <span className="hero-tag">React</span>
            <span className="hero-tag">Python</span>
            <span className="hero-tag">MySQL</span>
            <span className="hero-tag">Bilingual EN / JP</span>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span className="hero-scroll-text">scroll</span>
        <div className="hero-scroll-line"></div>
      </div>
    </header>
  )
}