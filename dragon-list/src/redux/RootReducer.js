import { combineReducers } from 'redux';

import dragonListReducer from './DragonList/dragonListReducer';
import dragonDetailsReducer from './DragonDetails/dragonDetailsReducer';

const rootReducer = combineReducers({
  dragonsList: dragonListReducer,
  dragonDetailsItens: dragonDetailsReducer
})

export default rootReducer