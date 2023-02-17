import React from 'react'
import './card.css'

const Card = (children, classsName. onClick) => {
    
  return (
    <article className={'card ${className}'} onClick={onClick}>
        {children}
    </article>
  )
}

export default Card
