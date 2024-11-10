import React from 'react'

export const Tags = ({ items }) => {
  return (
    <div className='tag__container'>
        {items.map(item => <div className='tag__item' key={index}>{item}</div>)}
    </div>
  )
}
