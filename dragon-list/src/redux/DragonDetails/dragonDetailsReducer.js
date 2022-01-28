import dragonDetailsTypes from "./dragonDetailsTypes";

const INITIAL_STATE = {
  dragonDetails: {}
}

const dragonDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dragonDetailsTypes.SHOW_DRAGON_DETAILS:
      return {
        ...state, 
        dragonDetails: action.payload
      }
  
    default:
      return state;
  }
}

export default dragonDetailsReducer