import React from 'react';
import './Home.css';
import Data from './Data';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="home__content">
          <div className="home__img"></div>
          <Data />
        </div>
        
        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
            <span className="home__scroll-name">Scroll Down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
        
        <div className="home__shapes">
          <div className="home__shape home__shape-1"></div>
          <div className="home__shape home__shape-2"></div>
          <div className="home__shape home__shape-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;