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
          <h2 className='port_header'>Projects</h2>
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
                      <div><a href={project.img_href} rel="noopener noreferrer" target="_blank"><img src={project.img_src} alt="portrait" className="project_image" /></a></div>
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
