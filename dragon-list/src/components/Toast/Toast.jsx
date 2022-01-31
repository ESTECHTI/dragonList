import React from 'react';
import './Toast.scss'

const Toast = ({label, idToast}) => {
  return (
    <div id={idToast}>
      {label}
    </div>
  )
}

export default Toast