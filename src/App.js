import React from 'react'
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Certification from './components/certification/Certification'
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/ScrollUp';
import Project from './components/project/Project';

const App = () => {
  return (
    <div>

    <Header/>
    
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Certification/>
      <Qualification/>
      <Contact/>
    </main>

    <Footer/>
    <Scrollup/>

    </div>
  )
}

export default App