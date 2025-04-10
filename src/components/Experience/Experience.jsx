import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="experience__container container">
        <div className="experience__tabs">
          <div 
            className={toggleState === 1 
              ? "experience__button experience__active button-flex" 
              : "experience__button button-flex"}
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt experience__icon"></i> Work
          </div>
          <div 
            className={toggleState === 2 
              ? "experience__button experience__active button-flex" 
              : "experience__button button-flex"}
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap experience__icon"></i> Education
          </div>
        </div>

        <div className="experience__sections">
          {/* Work Experience */}
          <div className={toggleState === 1 
            ? "experience__content experience__content-active" 
            : "experience__content"}>
            <div className="experience__data">
              <div>
                <h3 className="experience__title">Senior Software Engineer</h3>
                <span className="experience__company">TechNova Solutions</span>
                <div className="experience__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
                <ul className="experience__list">
                  <li className="experience__item">Leading the development of scalable microservices architecture</li>
                  <li className="experience__item">Mentoring junior developers and implementing best practices</li>
                  <li className="experience__item">Designing and optimizing cloud-native applications</li>
                </ul>
              </div>

              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>

            <div className="experience__data">
              <div></div>

              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>

              <div>
                <h3 className="experience__title">Software Engineer</h3>
                <span className="experience__company">DataFlow Systems</span>
                <div className="experience__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2023
                </div>
                <ul className="experience__list">
                  <li className="experience__item">Developed high-performance data processing applications</li>
                  <li className="experience__item">Collaborated with cross-functional teams to design RESTful APIs</li>
                  <li className="experience__item">Implemented CI/CD pipelines for automated testing and deployment</li>
                </ul>
              </div>
            </div>

            <div className="experience__data">
              <div>
                <h3 className="experience__title">Junior Developer</h3>
                <span className="experience__company">WebSphere Inc.</span>
                <div className="experience__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
                <ul className="experience__list">
                  <li className="experience__item">Built responsive web applications using React and Node.js</li>
                  <li className="experience__item">Participated in all phases of the software development lifecycle</li>
                  <li className="experience__item">Collaborated with UX designers to implement user-friendly interfaces</li>
                </ul>
              </div>

              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className={toggleState === 2 
            ? "experience__content experience__content-active" 
            : "experience__content"}>
            <div className="experience__data">
              <div>
                <h3 className="experience__title">Master of Science in Data Science</h3>
                <span className="experience__company">SUNY at Albany</span>
                <div className="experience__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2025
                </div>
                  <p className="experience__item">GPA: 3.9/4.0</p>
              </div>

              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>

            <div className="experience__data">
              <div></div>

              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>

              <div>
                <h3 className="experience__title">Bachelor of Technology in Computer Engineering</h3>
                <span className="experience__company">Indian Institute of Technology</span>
                <div className="experience__calendar">
                  <i className="uil uil-calendar-alt"></i> 2012 - 2016
                </div>
                <ul className="experience__list">
                  <li className="experience__item">Graduated with distinction</li>
                  <li className="experience__item">Key courses: Data Structures, Algorithms, Database Systems, Computer Networks</li>
                  <li className="experience__item">Senior project: Real-time traffic monitoring system using computer vision</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;