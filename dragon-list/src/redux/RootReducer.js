import { combineReducers } from 'redux';

import dragonLoginReducer from './DragonLogin/dragonLoginReducer';
import dragonListReducer from './DragonList/dragonListReducer';
import dragonDetailsReducer from './DragonDetails/dragonDetailsReducer';

const rootReducer = combineReducers({
  dragonsList: dragonListReducer,
  dragonLogin: dragonLoginReducer,
  dragonDetailsItens: dragonDetailsReducer,
})

export default rootReducer