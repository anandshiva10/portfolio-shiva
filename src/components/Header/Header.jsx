import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const[Toggle, showMenu] = useState(false);

  return (
    <div>
      <header className='header'>
        <nav className='nav container'>
          <a className='logo'>SHIVA ANAND</a>

          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item"><a href="#home" className="nav__link active-link"><i className="uil uil-estate nav__icon"></i>Home</a></li>
              <li className="nav__item"><a href="#about" className="nav__link"><i className="uil uil-user nav__icon"></i>About</a></li>
              <li className="nav__item"><a href="#skills" className="nav__link"><i className="uil uil-file-alt nav__icon"></i>Skills</a></li>
              <li className="nav__item"><a href="#experience" className="nav__link"><i className="uil uil-briefcase-alt nav__icon"></i>Experience</a></li>
              <li className="nav__item"><a href="#contact" className="nav__link"><i className="uil uil-message nav__icon"></i>Contact</a></li>
            </ul>

            <i className="uil uil-times nav__close" onClick={()=>showMenu(!Toggle)}></i>
          </div>
          <div className="nav__toggle" onClick={()=>showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </div>
  )
}


export default Header;
