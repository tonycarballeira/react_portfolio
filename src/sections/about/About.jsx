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
                <p>I have had the opportunity of working with a diverse set of programming languages and technologies alongside some talented teams on a number of projects.</p><br></br>
                <p>I have a wide range of skills that include design (and working closely with designers), front-end development (HTML5, CSS3, Javascript, Responsive, UX), back-end development using open source technologies (Rails, Express, Django), interacting with databases (SQL Server, Postgres, MySQL), and being a google search master. </p>
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

          <div className="languages">
              <p>Languages</p><br></br>
              <ul>
                  <li>Html / Css</li>
                  <li>Javascript</li>
                  <li>Ruby</li>
                  <li>Python</li>
                  <li>Typescript</li>
                </ul>
            </div>
            <div className="frontend_skills">
              <p>Frontend</p><br></br>
              <ul>
                <li>Jquery</li>
                <li>React</li>
                <li>Angular</li>               
                <li>Bootstrap</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <div className="backend_skills two">
              <p>Backend</p><br></br>
              <ul>
                <li>Rails</li>
                <li>ExpressJS</li>
                <li>Django</li>
                <li>SQL</li>
                <li>MongoDB</li>
                </ul>
            </div>
            
            <div className="languages two">
              <p>Tools</p><br></br>
              <ul>
                  <li>Git</li>
                  <li>Photoshop</li>
                  <li>Excel</li>
                  <li>Google</li>
                </ul>
            </div>
          </div>
    </section>
  )
}

export default About