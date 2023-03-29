import React from 'react'
import './header.css'
import Logo from '../../assets/face.jpeg'
import data from './data'

const Header = () => {
  return (
    
      <div id="maniac" className="container container__header">
        {/* <div className="header__profile">
          <img src={Logo} alt="header portrait" />
        </div> */}
        <div>
          <h2 className='greeting'>Hi, my name is</h2>
        </div>
        <div><h2  id="change" className='heading'>Tony Carballeira.</h2></div>
        <div><h2 className='heading'>I build things for the web.</h2></div>
        
        <div>
          <p className='info'>
          I’m a web developer with frontend and backend experience. Currently, I’m focused on building projects and 
          joining a development team. 
          </p>
        </div>
        
        <div className='header__cta'>
          <a href="#contact" className='btn light'>Contact</a>
          <a href="#portfolio" className='btn light'>Projects</a>
        </div>
      </div>
     

  )
}

export default Header
