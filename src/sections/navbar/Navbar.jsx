import React, {useState} from 'react'
import './navbar.css'
import data from './data'
import Logo from '../../assets/face.jpeg'
// import {IoIosColorPalette} from 'react-icons/io'
import Disappear from './Disappear'
import {ImDownload} from 'react-icons/im'
import CV from '../../assets/tony_resume.pdf'
import {TfiThumbUp} from 'react-icons/tfi'

const Navbar = () => {  

  const scrollDirection = Disappear();
  const showSettings =  (event) => {
    event.preventDefault();    
  }

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [bgBlur, setBgBlur] = useState([]);

  const updateMenu = () => {

      if (!isMenuClicked) {
          setBurgerClass("burger-bar clicked");
          setMenuClass("menu visible");
          setBgBlur(bgBlur => [...bgBlur, 1]);
          setIsMenuClicked(true);
      }
      else {
          setBurgerClass("burger-bar unclicked");
          setMenuClass("menu hidden");
          setBgBlur([]);
          setIsMenuClicked(false);
      }

      
  }


  return (
    <>
    <nav className={`doner ${ scrollDirection === "down" ? "hide" : "show"}`}>     
      <div className="container nav__container"> 
        <div className='nav__logo'>
          <a href="index.html" >
            <TfiThumbUp size={35}/>
          </a>  
        </div>
                  
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
          <li><a href={CV} download="Tony Carballeira Resume" >Resume <ImDownload/></a></li>
        </ul> 

        <div className='burger-menu' onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
        </div>
      
      </div>
    </nav>

    { bgBlur.map(item => <div key={item} className='blur'></div>)}

    <div className={menu_class}>
        
      {
        data.map(item => <li key={item.id}><a href={item.link} onClick={updateMenu}>{item.title}</a></li>)
      }
      <li><a href={CV} download="Tony Carballeira Resume" className='resume__button'>Resume <ImDownload/></a></li>
    </div>
    </>
  )
}

export default Navbar

