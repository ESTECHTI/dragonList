import dragonLoginTypes from "./dragonLoginTypes";

const INITIAL_STATE = {
  dragonUser: 'reactPlayer',
  dragonPassword: 'react123',
  dragonLoginUser: '',
  dragonLoginPassword: '',
}

const dragonLoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dragonLoginTypes.DRAGON_LOGIN_USER:
      return {
        ...state, 
        dragonLoginUser: action.payload
      };
    case dragonLoginTypes.DRAGON_LOGIN_PASSWORD:
      return {
        ...state,
        dragonLoginPassword: action.payload
      };
    case dragonLoginTypes.DRAGON_USER:
      return {
        ...state,
        dragonUser: action.payload
      }
    case dragonLoginTypes.DRAGON_PASSWORD:
      return {
        ...state,
        dragonPassword: action.payload
      }
  
    default:
      return state;
  }
}

export default dragonLoginReducer