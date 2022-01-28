import dragonRegistrationTypes from "./dragonRegistrationTypes";

const INITIAL_STATE = {
  dragonRegisterName: '',
  dragonRegisterType: '',
  dragonRegisterHistory: []
}

const DragonRegistrationReducer = (state = INITIAL_STATE, action) => {
  console.log('action', action.payload)
  switch (action.type) {
    case dragonRegistrationTypes.DRAGON_REGISTER_NAME:
      return {
        ...state, 
        dragonRegisterName: action.payload
      }
    case dragonRegistrationTypes.DRAGON_REGISTER_TYPE:
      return {
        ...state, 
        dragonRegisterType: action.payload
      }
    case dragonRegistrationTypes.DRAGON_REGISTER_HISTORY:
      return {
        ...state, 
        dragonRegisterHistory: action.payload
      }
  
    default:
      return state;
  }
}

export default DragonRegistrationReducer