import React from 'react';
import './Button.scss'

export const Button = ({ label, style, ...otherProps}) => (
  <button className="btn--primary" style={style}  {...otherProps}>
    { label }
  </button>
)