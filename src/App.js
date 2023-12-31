import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
    <Header />
    <main className="main">
      
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
  
    </main>
    </>
  )
}

export default App;
