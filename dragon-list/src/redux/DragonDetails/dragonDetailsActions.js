import DragonList from '../../models/dragon-list';
import dragonDetailsTypes from './dragonDetailsTypes';

function returnUpdateDragonDetails(data) {
  return {
    type: dragonDetailsTypes.SHOW_DRAGON_DETAILS,
    payload: data
  }
}

export const returnDragonDetails = (id) => {
  return (dispatch) => {
    DragonList.getDragonDetails(id)
      .then((response) => {
        console.log('response details', response.data)
        dispatch(returnUpdateDragonDetails(response.data))
      })
  }
}