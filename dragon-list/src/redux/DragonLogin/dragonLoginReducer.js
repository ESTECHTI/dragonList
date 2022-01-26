import dragonLoginTypes from "./dragonLoginTypes";

const INITIAL_STATE = {
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
      }
  
    default:
      return state;
  }
}

export default dragonLoginReducer