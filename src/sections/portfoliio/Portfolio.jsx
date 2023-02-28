import React from 'react'
import './portfolio.css'
import ProjectItem from './ProjectItem'
import Face from '../../assets/face.jpeg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Projects</h2>
      <div className="projectsList">
        <ProjectItem name="social media website" image={Face}/>
        <ProjectItem name="Spotify CLone" image={Face}/>
        <ProjectItem name="Spotify CLone" image={Face}/>
      </div>
    </section>
  )
}

export default Portfolio
