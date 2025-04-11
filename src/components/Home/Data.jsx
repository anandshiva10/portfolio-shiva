import React from 'react';
import { ReactTyped } from 'react-typed';
import resumePDF from '../../assets/Shiva_Anand_Resume.pdf'; 
const Data = () => {
  return (
    <div data-aos="fade-in" className="home__data">
      <p className='home__greeting'>Hi, This is</p>
      <h1  className="home__title">SHIVA ANAND GOGULA</h1>
      <h3 className='home__subtitle'>
        <ReactTyped
          strings={[
            'Software Engineer',
            'Java Developer',
            'AWS Enthusiast'
          ]}
          typeSpeed={80}
          backSpeed={50}
          backDelay={1000}
          loop
        />
      </h3>
      <p className="home__description">
      New York-based developer with a knack for Java solutions and a background that spans continents.
      </p>
      <div className="home__buttons">
        <a href={resumePDF} className="button" download="Shiva_Anand_Resume.pdf">Download Resume</a>
      </div>
    </div>
  )
}

export default Data;