import { combineReducers } from 'redux';

import DragonLoginReducer from './DragonLogin/dragonLoginReducer';
import dragonListReducer from './DragonList/dragonListReducer';
import dragonDetailsReducer from './DragonDetails/dragonDetailsReducer';
import DragonRegistrationReducer from './DragonRegistration/dragonRegistrationReducer'

const rootReducer = combineReducers({
  dragonsList: dragonListReducer,
  dragonLogin: DragonLoginReducer,
  dragonDetailsItens: dragonDetailsReducer,
  dragonRegistration: DragonRegistrationReducer
})

export default rootReducer