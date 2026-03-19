import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Overview from './pages/Overview'
import Experiences from './pages/Experiences'
import SkillSet from './pages/SkillSet'
import EducationInterests from './pages/EducationInterests'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/skill-set" element={<SkillSet />} />
        <Route path="/education-interests" element={<EducationInterests />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}