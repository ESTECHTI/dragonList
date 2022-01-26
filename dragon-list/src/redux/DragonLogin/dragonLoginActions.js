import dragonLoginTypes from './dragonLoginTypes';
import { createBrowserHistory } from 'history';

export const browserHistory = createBrowserHistory();

function updateInputEmail(data) {
  console.log('email', data)
  return {
    type: dragonLoginTypes.DRAGON_LOGIN_USER,
    payload: data
  }
}

function updateInputPassword(data) {
  console.log('password', data)
  return {
    type: dragonLoginTypes.DRAGON_LOGIN_PASSWORD,
    payload: data
  }
}

export const handleEmailChange = (event) => {
  return (dispatch) => {
    dispatch(updateInputEmail(event.target.value))
  }
}

export const handlePasswordChange = (event) => {
  return (dispatch) => {
    dispatch(updateInputPassword(event.target.value))
  }
}

export const handleLoginAccess = () => {
  console.log('click')
  return () => {
    browserHistory.push('/dragonList')
  }
}