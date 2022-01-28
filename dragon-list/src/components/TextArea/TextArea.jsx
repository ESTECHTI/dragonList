import React from 'react';
import './TextArea.scss'

export const TextArea = ({value, label, changeValue}) => {
  
  const styleProps = {
    border: '1px solid #ddd',
    borderRadius: '4px',
  }
  
  return (
    <div className='text--area'>
      <label>{label}</label>
      <textarea 
        style={styleProps}
        value={value}
        onChange={changeValue}
        rows="5" cols="40"
      />
    </div>
  )
}
