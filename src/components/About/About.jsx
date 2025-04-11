import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 data-aos="fade-in" className="section__title">About Me</h2>
      <span data-aos="fade-in" className="section__subtitle">My Introduction</span>

      <div className="about__container container">
        <div className="about__content">
          <div className="about__text">

            <p className="about__description">
            While most coffee enthusiasts start their morning with Java, I've spent the last 3+ years building with it! Just like a barista crafts the perfect cup, I architect enterprise-grade applications using Java, Spring Boot, and microservices—delivering solutions with just the right punch every time.
            </p>
            <p className="about__description">
            Currently wearing two hats: pursuing graduate studies at SUNY Albany while crunching health analytics as a Student Assistant at the New York State Department of Health. Previously, I engineered solutions for Mercedes-Benz as a contractor with Infosys—proving that good code, like good cars, is built on precision and reliability.
            </p>
            <p className="about__description">
              My portfolio spans Java Enterprise applications, middleware architecture, React frontends, and health data analytics. I thrive in that sweet spot where development logic meets intuitive design.
            </p>
            <p className="about__description">
              Born in the vibrant streets of India, I carry my love for cricket and street food wherever I go. When I'm not pushing commits, you might find me buried in a good book or analyzing plot twists instead of data points. And yes, I occasionally fall into Instagram scrolling spirals—but don't we all?
            </p>
            <p className="about__description">
              Let's connect and build something remarkable together.
            </p>
            {/* <a href="#contact" className="button button-flex"> */}
              {/* Contact Me <i className="uil uil-message button__icon"></i> */}
            {/* </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;