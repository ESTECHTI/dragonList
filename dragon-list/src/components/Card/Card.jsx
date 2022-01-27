import React, { useState } from 'react';
import './Cards.scss'

export const Card = ({ label, ...otherProps }) => {
  
  
  return (
    <div className='card--elements' {...otherProps}>
      <p>{label}</p>
    </div>
  )
}