// Experience.jsx
import React from 'react';
import './Experience.css';

const Experience = () => {
  // Combined timeline data (both work experience and education)
  const timelineData = [
    {
      title: "Student Assistant",
      organization: "NYS Department of Health",
      period: "Aug 2024 - Present",
      details: "Albany, NY",
      position: "left" // left side of timeline
    },
    {
      title: "Master of Science in Data Science",
      organization: "SUNY at Albany",
      period: "Aug 2023 - May 2025",
      details: "CGPA: 3.9/4.0",
      position: "right" // right side of timeline
    },
    {
      title: "Senior Systems Enginner",
      organization: "Infosys",
      period: "Sep 2021 - July 2023",
      details:"Hyderabad, India" ,
      position: "left" // left side of timeline
    },

    {
      title: "Bachelor of Technology in Computer Engineering",
      organization: "JNTUH",
      period: "July 2016 - Sep 2019",
      details: "CGPA: 7.7/10.0",
      position: "right" // left side of timeline
    }
  ];

  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">Academic & Professional Evolution</span>

      <div className="experience__container container">
        <div className="experience__sections">
          {timelineData.map((item, index) => (
            <div className="experience__data" key={index}>
              {item.position === "left" ? (
                <>
                  <div>
                    <h3 className="experience__title">{item.title}</h3>
                    <span className="experience__company">{item.organization}</span>
                    <div className="experience__calendar">
                      <i className="uil uil-calendar-alt"></i> {item.period}
                    </div>
                    {item.details && (
                      <div className="experience__details">{item.details}</div>
                    )}
                  </div>

                  <div>
                    <span className="experience__rounder"></span>
                    {index !== timelineData.length - 1 && <span className="experience__line"></span>}
                  </div>

                  <div></div>
                </>
              ) : (
                <>
                  <div></div>
                  
                  <div>
                    <span className="experience__rounder"></span>
                    {index !== timelineData.length - 1 && <span className="experience__line"></span>}
                  </div>

                  <div>
                    <h3 className="experience__title">{item.title}</h3>
                    <span className="experience__company">{item.organization}</span>
                    <div className="experience__calendar">
                      <i className="uil uil-calendar-alt"></i> {item.period}
                    </div>
                    {item.details && (
                      <div className="experience__details">{item.details}</div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
