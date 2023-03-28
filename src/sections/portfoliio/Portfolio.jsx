import React from 'react'
import { motion } from 'framer-motion';
import './portfolio.css'
import ProjectItem from './ProjectItem'
import Face from '../../assets/face.jpeg'
import Logo from '../../assets/face.jpeg'
import {useState} from 'react'


const Portfolio = () => {

  const [slider, setSlider] = useState("overlay");

  const slide = () => {
    if (slider == "overlay") {
      setSlider("overlay slide");
    } else {
      setSlider("overlay");
    }
    
  };

  const [projects, setProjects] = useState([
    { id: "1", name: "Halcyon Theme", 
    description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on", 
    techs: ["VS Code", "Sublime Text", "Atom", "Iterm2", "Hyper" ], git: "", site: "", img_href:"", img_src: Logo, selected: true },
    { id: "1", name: "Halcyon Theme", 
    description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on", 
    techs: ["VS Code", "Sublime Text", "Atom", "Iterm2", "Hyper" ], git: "", site: "", img_href:"", img_src: Logo, selected: true },
    { id: "1", name: "Halcyon Theme", 
    description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on", 
    techs: ["VS Code", "Sublime Text", "Atom", "Iterm2", "Hyper" ], git: "", site: "", img_href:"", img_src: Logo, selected: true }
  ]);

  return (
    <section id="portfolio">
      <div className="container portfolio__container">
        <div className="header_div">
          <h2 className='about_header'>Projects</h2>
        </div>
        <div className="projectCards">

          {projects.map((project) => (

              <div className='cards' onClick={slide}>
              <h3 class="project-title" onClick={slide}><a>{project.name}</a></h3>
              <div class="project-description"><p>{project.description}</p></div> 
              <ul class="project-tech-list">
                {project.techs.map((tech) => (
                    <li>{tech}</li>
                ))}
              </ul>
  
              <div className='coco'>
                  <a href={project.git} aria-label="GitHub Link" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                  <a href={project.site} aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
              </div> 
              
              <div className={slider} onClick={slide}>
               
                  <div class="project-links">
                    <div className="about__portrait">
                      <div><a href={project.img_href} rel="noopener noreferrer" target="_blank"><img src={project.img_src} alt="portrait" /></a></div>
                    </div>
                    <div className='coco'>
                        <a href={project.git} aria-label="GitHub Link" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                        <a href={project.site} aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                    </div> 
                  </div>
              </div>
            </div>
          ))}                         
        </div>
      </div>
    </section>
  )
}

export default Portfolio
