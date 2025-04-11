import React, { useState } from 'react';
import './Experience.css';
import Modal from './Modal'; // We'll create this component

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Open modal with selected item data
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Combined timeline data (both work experience and education)
  const timelineData = [
    {
      title: "Student Assistant",
      organization: "NYS Department of Health",
      period: "August 2024 - Present",
      location: "Albany, New York",
      details: null,
      position: "left", // left side of timeline
      responsibilities: [
        "Developed SAS programs to generate datasets for public health indicators, ensuring data accuracy and reproducibility.",
        "Assisted in obtaining, preparing, and integrating data for CHIRE and CHIRS dashboards, enhancing data-driven decision-making.",
        "Created comparison check files to identify data discrepancies or drastic trend changes, ensuring reliable reporting.",
        "Conducted validation and quality assurance checks on datasets and dashboards to maintain data integrity."
      ]
    },
    {
      title: "M.S in Data Science",
      organization: "SUNY at Albany",
      period: "Aug 2023 - May 2025",
      location: "Albany, NY",
      details: "CGPA: 3.9/4.0",
      position: "right", // right side of timeline
      responsibilities: [
        "Pursued advanced coursework in Topological Data Analysis (TDA), applying topological methods to extract insights from complex datasets",
        "Mastered Applied Statistics fundamentals, including hypothesis testing, regression analysis, and Bayesian methods for predictive modeling and experimental design",
        "Developed a lung cancer prediction model using regression analysis and machine learning techniques, achieving 87% accuracy on validation datasets",
        "Balanced rigorous academic requirements while working as a Student Assistant at the New York State Department of Health (NYSDOH)"
      ]
    },
    {
      title: "Senior Systems Engineer",
      organization: "Infosys Limited",
      period: "Sep 2020 - Jul 2023",
      location: "Hyderabad, India",
      details: null,
      position: "left", // left side of timeline
      responsibilities: [
        "Spearheaded migration from legacy JSP/Struts to React Application on AWS, cutting page load time by 40%",
        "Architected Spring Boot microservices to replace monolithic message queue system, processing 3,000+ daily transactions",
        "Engineered Java-based Quartz Scheduler with RESTful API integration, eliminating licensing costs",
        "Orchestrated database migration from MySQL/WebLogic to PostgreSQL/Tomcat, reducing maintenance costs by 70%"
      ]
    },
    {
      title: "B.Tech in Computer Science",
      organization: "JNTU Hyderabad",
      period: "June 2016 - Sep 2020",
      location: "Hyderabad, India",
      details: "CGPA: 7.7/10.0",
      position: "right", // left side of timeline
      responsibilities: [
        "Specialized in Software Engineering and Database Systems with a focus on advanced SQL and systems architecture",
        "Designed and implemented 'BookBoon' - an innovative full-stack application enabling peer-to-peer textbook sharing across campus, reducing student costs by approximately 30%",
        "Excelled in Data Structures and Algorithms, and participating in competitive programming challenges"
      ]
    }
  ];

  return (
    <section className="experience section" id="experience">
      <h2 data-aos="fade-in" className="section__title">Experience</h2>
      <span data-aos="fade-in" className="section__subtitle">Career Milestones & Learning Paths</span>

      <div className="experience__container container">
        <div className="experience__sections">
          {timelineData.map((item, index) => (
            <div 
              className="experience__data" 
              key={index}
              onClick={() => openModal(item)}
            >
              {item.position === "left" ? (
                <>
                  <div data-aos="fade-right" className="experience__content">
                    <h3 className="experience__title">{item.title}</h3>
                    <span className="experience__company">{item.organization}</span>
                    <div className="experience__calendar">
                      <i className="uil uil-calendar-alt"></i> {item.period}
                    </div>
                    <div className="experience__location">
                      <i className="uil uil-location-point"></i> {item.location}
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

                  <div data-aos="fade-left" className="experience__content">
                    <h3 className="experience__title">{item.title}</h3>
                    <span className="experience__company">{item.organization}</span>
                    <div className="experience__calendar">
                      <i className="uil uil-calendar-alt"></i> {item.period}
                    </div>
                    <div className="experience__location">
                      <i className="uil uil-location-point"></i> {item.location}
                    </div>

                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal component */}
      {isModalOpen && selectedItem && (
        <Modal onClose={closeModal}>
          <div className="modal__header">
            <h3>{selectedItem.title}</h3>
            <h4>{selectedItem.organization}</h4>
            <div className="modal__period">
              <i className="uil uil-calendar-alt"></i> {selectedItem.period}
            </div>
            <div className="modal__location">
              <i className="uil uil-location-point"></i> {selectedItem.location}
            </div>
          </div>
          <div className="modal__body">
            <h4>Responsibilities:</h4>
            <ul className="modal__responsibilities">
              {selectedItem.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Experience;
