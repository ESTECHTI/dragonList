import dragonListTypes from "./dragonListTypes";

const INITIAL_STATE = {
  dragonList: ''
}

const dragonListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dragonListTypes.SHOW_DRAGON_LIST:
      return {
        ...state, 
        dragonList: action.payload
      }
  
    default:
      return state;
  }
}

export default dragonListReducer