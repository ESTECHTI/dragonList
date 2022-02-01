import DragonList from '../../models/dragon-list';
import dragonListTypes from './dragonListTypes';

function returnUpdateDragonList(data) {
  return {
    type: dragonListTypes.SHOW_DRAGON_LIST,
    payload: data
  }
}

function returnAuthUser(data) {
  return {
    type: dragonListTypes.SHOW_AUTH,
    payload: data
  }
}

export const returnDragonList = () => {
  return (dispatch) => {
    DragonList.getDragonList()
      .then((response) => {
        dispatch(returnUpdateDragonList(response.data))
      })
  }
}

export const authUser = (data) => {
  return (dispatch) => {
    dispatch(returnAuthUser(data))
  }
}
