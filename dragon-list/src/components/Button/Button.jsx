import React from 'react';
import './Button.scss'

export const Button = ({ label, style, className, ...otherProps}) => (
  <button className={className} style={style} {...otherProps}>
    { label }
  </button>
)