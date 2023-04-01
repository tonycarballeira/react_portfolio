import React from 'react'
import './contact.css'
import data from './data'

import {FaLinkedin} from 'react-icons/fa'
import {FaGithubAlt} from 'react-icons/fa'


const Contact = () => {
  return (
    <section id="contact">
      <div className='container'>
        <h2 className='contact_header'>Contact</h2>
        <div class="intouch">
            <div>
              <p class="skill_body">I'm available to discuss projects, so get in touch:</p>
            </div>
            <div>
              <p>tonycarballeira@gmail.com</p>
            </div>
            <div className="linko">
              <a href="https://www.linkedin.com/in/tonycarballeira/" target="_blank" id="con_link"><FaLinkedin size={22}/></a>
              <a href="https://github.com/tonycarballeira" target="_blank" ><FaGithubAlt size={22}/></a>
            </div>
        </div>
        
      </div>
    </section>
  )
}

export default Contact
