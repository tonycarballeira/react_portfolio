import React from 'react'
import './header.css'
import Logo from '../../assets/face.jpeg'
import data from './data'

const Header = () => {
  return (
    <header id='header'>
      <div className="container container__header">
        <div className="header__profile">
          <img src={Logo} alt="header portrait" />
        </div>
        <h3>Tony Carballeira</h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        <div className='header__cta'>
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        {/* <div className='header__socials'>
          { 
            data.map(item => 
              <a key={item.id} href={item.link} target="_blank" rel='noopener noreferrer'>  {item.icon}  </a>
            )
          }
        </div> */}
      </div>
    </header> 

  )
}

export default Header
