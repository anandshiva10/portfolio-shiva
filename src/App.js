import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app app__container">
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Experience />
        {/* <Contact /> */}
      </main>
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;