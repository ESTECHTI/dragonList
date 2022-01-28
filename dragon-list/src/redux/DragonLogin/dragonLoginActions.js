import dragonLoginTypes from './dragonLoginTypes';

function updateDragonName(data) {
  return {
    type: dragonLoginTypes.DRAGON_LOGIN_USER,
    payload: data
  }
}

export const handleEmailChange = (event) => {
  console.log('event', event.target.value)
  return(dispatch) => {
  dispatch(updateDragonName(event.target.value))
}
}

export const handlePasswordChange = (event) => ({
  type: dragonLoginTypes.DRAGON_LOGIN_PASSWORD,
  payload: event.target.value
})
