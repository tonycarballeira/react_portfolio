import React from 'react'
import './navbar.css'
import data from './data'
import Logo from '../../assets/face.jpeg'
// import {IoIosColorPalette} from 'react-icons/io'
import Disappear from './Disappear'

const Navbar = () => {

  const scrollDirection = Disappear();
  console.log(scrollDirection);

  return (
    <nav className={`doner ${ scrollDirection === "down" ? "hide" : "show"}`}>     
      <div className="container nav__container"> 
        <div className='nav__logo'>
          <a href="index.html" >
            <img src={Logo} alt="" />
          </a>  
        </div>
                  
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>        
      </div>
    </nav>
  )
}

export default Navbar

