import dragonLoginTypes from './dragonLoginTypes';

function updateInputEmail(data) {
  console.log('user', data)
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