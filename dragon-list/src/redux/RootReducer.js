import { combineReducers } from 'redux';

import dragonListReducer from './DragonList/dragonListReducer';

const rootReducer = combineReducers({
  dragonListReducer: dragonListReducer
})

export default rootReducer