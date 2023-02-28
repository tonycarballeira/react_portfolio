import React from 'react'
import { motion } from 'framer-motion';
import './portfolio.css'
import ProjectItem from './ProjectItem'
import Face from '../../assets/face.jpeg'


const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const projectVariant = {
  hidden: {opacity: 0, scale: 0.8},
  visible: {opacity: 1, scale: 1}
};


const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container about__container">
        <div className="header_div">
          <h2 className='about_header'>Projects</h2>
        </div>
        {/* <div className="projectsList">
          <ProjectItem name="social media website" image={Face}/>
          <ProjectItem name="Spotify CLone" image={Face}/>
          <ProjectItem name="Spotify CLone" image={Face}/>
        </div> */}

        <div className="flex justify-center">
          <motion.div
            className='sm:grid sm:grid-cols-3'
            intitial='hidden'
            whileinView='visible'
            viewport={{once: true, amount: 0.5}}
            variants={container}
          >


          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio


// md:w-2/4 mx-auto text-center?

// {
//   hidden: { opacity: 0, y: -50},
//   visible: { opacity: 1, y: 0},
// }