import React from 'react'
import { motion } from 'framer-motion';
import './portfolio.css'
import ProjectItem from './ProjectItem'
import Face from '../../assets/face.jpeg'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container portfolio__container">
        <div className="header_div">
          <h2 className='about_header'>Projects</h2>
        </div>
        <div className="projectsList">
          <ProjectItem name="social media website" image={Face}/>
          <ProjectItem name="Spotify CLone" image={Face}/>
          <ProjectItem name="Spotify CLone" image={Face}/>
        </div>       
      </div>
    </section>
  )
}

export default Portfolio
