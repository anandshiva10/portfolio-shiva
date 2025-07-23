import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 data-aos="fade-in" className="section__title">Contact Me</h2>
      <span data-aos="fade-in" className="section__subtitle">Get in touch</span>

      <div className="contact__container container">
        <div className="contact__content">
          <div className="contact__quote">
            <p>"I'm always up for a chat or coffee <i class='bx bx-coffee-togo' ></i>" </p>
          </div>

          <div className="contact__info">
            <div data-aos="fade-right" className="contact__card">
              <i className="uil uil-phone contact__card-icon"></i>
              <h3 className="contact__card-title">Call me on</h3>
              <p className="contact__card-data">+1 (518) 878-6382</p>
            </div>

            <div data-aos="fade-up" className="contact__card">
              <i className="uil uil-envelope contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <p className="contact__card-data">shivaanandgsa@gmail.com</p>
            </div>

            <div data-aos="fade-left" className="contact__card">
              <i className="uil uil-map-marker contact__card-icon"></i>
              <h3 className="contact__card-title">Location</h3>
              <p className="contact__card-data">Albany, NY</p>
            </div>
          </div>

          <div className="contact__social">
            <a  href="https://github.com/anandshiva10" className="contact__social-link" target="_blank" rel="noreferrer">
              <i className="uil uil-github"></i>
              GitHub
            </a>
            <a href="https://linkedin.com/in/shivaanandgogula" className="contact__social-link" target="_blank" rel="noreferrer">
              <i className="uil uil-linkedin"></i>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
