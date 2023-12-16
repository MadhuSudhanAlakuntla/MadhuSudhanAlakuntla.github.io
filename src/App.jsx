import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomeSection from './components/HomeSection/HomeSection'
import AboutSection from './components/AboutSection/AboutSection'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div id='App'>
      <Navbar />
      <div id='main_wrapper'>
        <HomeSection />
        <AboutSection />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
