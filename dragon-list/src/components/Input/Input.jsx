import React, {useState} from 'react';
import './Input.scss'

export const Input = ({ label, type, placeholder, id, ...otherProps }) => {
  
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');

  function HandleTextChange(text) {
    setValue(text);

    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  
  return (
    <div className='input--elements'>
      <input
        className='input--elements-value'
        id={id}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={(e) => HandleTextChange(e.target.value)}
        {...otherProps}
      />
      <label className={isActive ? "Active" : ""} htmlFor={label}>{label}</label>
    </div>
  )
}
