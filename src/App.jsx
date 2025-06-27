import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-poppins bg-bg text-text min-h-screen">
      <Header />
      <main>
        <Hero />
        <Education />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  )
}

export default App 