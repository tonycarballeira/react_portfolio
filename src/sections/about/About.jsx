import React from 'react'
import './about.css';
import Logo from '../../assets/face.jpeg'
import CV from '../../assets/atc2.pdf'
import {ImDownload} from 'react-icons/im'

const About = () => {
  return (
    <section id="about">
       <div className="container about__container">
        
            <div className="header_div">
              <h2 className='about_header'>About me</h2>
            </div>
            <div className="inner">
              <div className="about__left">          
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                {/* <a href={CV} download className='btn primary' target="blank" rel='noopener noreferrer'>Download CV<ImDownload/></a> */}
              </div>

              <div className="about__right">
                <div className="about__portrait">
                  <img className="tint-magenta" src={Logo} alt="portrait" />
                </div>
              </div>
            </div>
          </div> 
          <div className="container skills__container">
            <div className="frontend_skills">
              <ul>
                <li>ReactJS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <div className="backend_skills">
              <ul>
                  <li>NodeJS</li>
                  <li>ExpressJS</li>
                  <li>MongoDB</li>
                  <li>Rails</li>
                  <li>AWS</li>
                </ul>
            </div>
            <div className="languages">
            <ul>
                <li>Javascript</li>
                <li>Ruby</li>
                <li>Python</li>
                <li>Typescript</li>
              </ul>
            </div>
          </div>
    </section>
  )
}

export default About