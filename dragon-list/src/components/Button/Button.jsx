import React from 'react';
import './Button.scss'

export const LoginButton = ({label, ...otherProps}) => (
  <button className="btn--primary"  {...otherProps}>
    { label }
  </button>
)