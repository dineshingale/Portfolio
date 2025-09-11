import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import './index.css';

const App = () => {
  return (
    <>
      <div className="bg-black text-white min-h-screen flex flex-col items-center">
        <Header />
        <Skills />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;