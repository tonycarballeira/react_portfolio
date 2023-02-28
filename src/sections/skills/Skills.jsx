import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import './skills.css'

const Skills = () => {
  return (
    <section id="portfolio">
        <h2 className="head-text">Skills & Experience</h2>
        <div className="app__skills-constainer">
            <motion.div className='app__skills-list'>
                <motion.div whileInView={{opacity: [0, 1]}} transition={{duration:1}} className="app__skills-item">Hello</motion.div>
            </motion.div>
        </div>
    </section>
        
   
  )
  
}

export default Skills
