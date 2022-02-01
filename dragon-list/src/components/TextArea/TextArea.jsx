import React from 'react';
import './TextArea.scss'

export const TextArea = ({ value, label, className, styledTextArea, changeValue}) => {
  return (
    <div className='text--area'>
      <label>{label}</label>
      <textarea 
        className={className}
        style={styledTextArea}
        value={value}
        onChange={changeValue}
        rows="5" cols="40"
      />
    </div>
  )
}
