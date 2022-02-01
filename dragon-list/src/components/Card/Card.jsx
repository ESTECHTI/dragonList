import React from 'react';
import './Cards.scss'

export const Card = ({ label, className, ...otherProps }) => {
  return (
    <div className={className} {...otherProps}>
      <p>{label}</p>
    </div>
  )
}