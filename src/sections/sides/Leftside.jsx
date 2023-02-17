import React from 'react'
import './leftside.css'
import data from './data'

const Leftside = () => {
  return (
    <div orientation="left" className='header__socials'>
        { 
            data.map(item => 
                <a key={item.id} href={item.link} target="_blank" rel='noopener noreferrer'>  {item.icon}  </a>
            )
        }
    </div>

    
  )
}

export default Leftside
