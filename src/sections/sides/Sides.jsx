import React from 'react'
import './sides.css'
import data from './data'

const Sides = () => {
  return (
    <>
    <div orientation="left" className='header__socials'>
        { 
            data.map(item => 
                <a key={item.id} href={item.link} target="_blank" rel='noopener noreferrer'>  {item.icon}  </a>
            )
        }
    </div>
    <div orientation="right" className='header__email'>
        <a href="">tonycarballeira@gmail.com</a>
    </div>
    </>
    )
}

export default Sides
