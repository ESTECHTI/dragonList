import { combineReducers } from 'redux';

import dragonListReducer from './DragonList/dragonListReducer';
import dragonLoginReducer from './DragonLogin/dragonLoginReducer';

const rootReducer = combineReducers({
  dragonListReducer: dragonListReducer,
  dragonLogin: dragonLoginReducer,
})

export default rootReducer