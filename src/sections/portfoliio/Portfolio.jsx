import React from 'react'
import { motion } from 'framer-motion';
import './portfolio.css'
import ProjectItem from './ProjectItem'
import Face from '../../assets/face.jpeg'
import Chordbuddy from '../../assets/chordbuddy.png'
import Crypto from '../../assets/cryptofaqs.png'
import School from '../../assets/int_school.png'
import {useState} from 'react'
import {RxImage} from 'react-icons/rx'
import {FiGithub} from 'react-icons/fi'
import {GoLinkExternal} from 'react-icons/go'



const Portfolio = () => {

  const [slider, setSlider] = useState("overlay");

  const slide = (id) => {
    setProjects(projects.map(proj => {
      if (proj.id === id && proj.class == "overlay") {
        return {...proj, class: "overlay slide"}
      } else if (proj.id === id && proj.class == "overlay slide") {
        return {...proj, class: "overlay"}
      } else {
        return proj
      }
    }))
  };

  const [projects, setProjects] = useState([
    { id: "1", name: "Chord Buddy", 
    description: "Piano chord suggester app for songwriting and music theory study. Use an in-app piano to key in a chord and a new chord will be generated to follow it. Create and save chord progressions.", 
    techs: ["Rails", "Bootstrap", "jquery", "Postgres", "Html / CSS" ], 
    git: "https://github.com/tonycarballeira/chord_buddy_railsupdate.git", site: "https://cool-butterfly-2818.fly.dev/chords/search", img_href:"https://cool-butterfly-2818.fly.dev/chords/search", img_src: Chordbuddy, selected: false, class: "overlay" },
    { id: "2", name: "Crypto Faqs", 
    description: "Cryptocurrency information app showing coin stats and a bitcoin halving countdown timer. Navigate through a list of top cryptocurrencies and click for more info.", 
    techs: ["React", "TailwindCSS", "Javascript", "Coingecko API", "Blockchain API" ], 
    git: "https://github.com/tonycarballeira/react_bitcoin_countdown.git", site: "https://grubby-rice.surge.sh/", img_href:"https://grubby-rice.surge.sh/", img_src: Crypto, selected: false, class: "overlay" },
    { id: "3", name: "School of Interactive Design", 
    description: "An online school for learning game design and development. A frontend demo of the app i originally built according to a designer's mockup.", 
    techs: ["Rails", "Bootstrap", "Jquery", "Html / CSS", "SQL" ], 
    git: "https://github.com/tonycarballeira/interactive_school_portfolio_update.git", site: "https://int-school2-development.onrender.com/", img_href:"https://int-school2-development.onrender.com/", img_src: School, selected: false, class: "overlay" }
  ]);

  return (
    <section id="portfolio">
      <div className="container portfolio__container">
        <div className="header_div">
          <h2 className='about_header'>Projects</h2>
        </div>
        <div className="projectCards">

          {projects.map((project, index) => (
            <div key={index} className='cards' id={project.id} onClick={() => slide(project.id)}>
              <h3 className="project-title" onClick={() => slide(project.id)}><a>{project.name}</a></h3>
              <div className="project-description"><p>{project.description}</p></div> 
              <ul className="project-tech-list">
                {project.techs.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
              </ul>
  
              <div className='coco'>
                  <a id="imager" onClick={() => slide(project.id)}><RxImage size={26}/></a>
                  <a href={project.git} target="_blank"><FiGithub size={25}/></a>
                  <a href={project.site} target="_blank"><GoLinkExternal size={26}/></a>
              </div> 
              
              <div className={project.class}>
               
                  <div className="project-links">
                    <div className="about__portrait">
                      <div><a href={project.img_href} rel="noopener noreferrer" target="_blank"><img src={project.img_src} alt="portrait" /></a></div>
                    </div>
                    {/* <div className='coco'>
                        <a href={project.git} aria-label="GitHub Link" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                        <a href={project.site} aria-label="External Link" className="external" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                    </div>  */}
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
