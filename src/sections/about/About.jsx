import React from 'react'
import './about.css';
import Logo from '../../assets/face.jpeg'
import CV from '../../assets/atc2.pdf'
import {ImDownload} from 'react-icons/im'

const About = () => {
  return (
    <section id="about">
       <div className="container about__container">
          <div className="about__left">
            <div className="about__portrait">
              <img src={Logo} alt="portrait" />
            </div>
          </div>
          <div className="about__right">
            <h2>About me</h2>
            <div className='about__cards'></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href={CV} download className='btn primary' target="blank" rel='noopener noreferrer'>Download CV<ImDownload/></a>
          </div>
       </div>
    </section>
  )
}

export default About