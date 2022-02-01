import dragonListTypes from "./dragonListTypes";

const INITIAL_STATE = {
  dragonList: '',
  auth: false
}

const dragonListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dragonListTypes.SHOW_DRAGON_LIST:
      return {
        ...state, 
        dragonList: action.payload
      }
    case dragonListTypes.SHOW_AUTH:
      return {
        ...state, 
        auth: action.payload
      }
  
    default:
      return state;
  }
}

export default dragonListReducer