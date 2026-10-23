
import './App.css'
import About from './components/About'
import Certification from './components/Certification'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 selection:bg-teal-400 selection:text-slate-950">
       <Navbar/>
        <main>
        <section id="home" className="min-h-screen pt-24">
          <Hero/>
        </section>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Certification/>
        <Contact/>
      </main>
    </div>
  )
}

export default App
