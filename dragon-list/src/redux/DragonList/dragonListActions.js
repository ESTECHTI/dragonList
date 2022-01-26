import DragonList from '../../models/dragon-list';
import dragonListTypes from './dragonListTypes';

function returnUpdateDragonList(data) {
  return {
    type: dragonListTypes.SHOW_DRAGON_LIST,
    payload: data
  }
}

export const returnDragonList = () => {
  return (dispatch) => {
    DragonList.getDragonList()
      .then((response) => {
        console.log('response.data', response.data)
        dispatch(returnUpdateDragonList(response.data))
      })
  }
}