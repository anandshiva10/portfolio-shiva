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
      title: "Software Engineer",
      organization: "DataFlow Systems",
      period: "Mar 2020 - Dec 2022",
      details: null,
      position: "left" // left side of timeline
    },
    {
      title: "Junior Developer",
      organization: "WebSphere Inc.",
      period: "Jul 2018 - Feb 2020",
      details: null,
      position: "right" // right side of timeline
    },
    {
      title: "Bachelor of Technology in Computer Engineering",
      organization: "Indian Institute of Technology",
      period: "Aug 2012 - May 2016",
      details: "CGPA: 3.8/4.0",
      position: "left" // left side of timeline
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
