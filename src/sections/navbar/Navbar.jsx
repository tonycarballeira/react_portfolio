import React, {useState} from 'react'
import './navbar.css'
import data from './data'
import Logo from '../../assets/face.jpeg'
// import {IoIosColorPalette} from 'react-icons/io'
import Disappear from './Disappear'
import {ImDownload} from 'react-icons/im'
import CV from '../../assets/atc2.pdf'

const Navbar = () => {

  const scrollDirection = Disappear();
  const showSettings =  (event) => {
    event.preventDefault();    
  }

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible");
            setIsMenuClicked(true);
        }
        else {
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden");
            setIsMenuClicked(false);
        }
    }


  return (
    <>
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
          <li><a href={CV} download className='resume__button'>Resume <ImDownload/></a></li>
        </ul> 

        <div className='burger-menu' onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
        </div>
      
      </div>
    </nav>

    <div className={menu_class}></div>
    </>
  )
}

export default Navbar

