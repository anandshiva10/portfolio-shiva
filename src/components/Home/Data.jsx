import React from 'react';
import { ReactTyped } from 'react-typed';

const Data = () => {
  return (
    <div className="home__data">
      <p className='home__greeting'>Hi, this is</p>
      <h1 className="home__title">SHIVA ANAND GOGULA</h1>
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
        <a href="#" className="button">Download Resume</a>
      </div>
    </div>
  )
}

export default Data;