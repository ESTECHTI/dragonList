import DragonList from '../../models/dragon-list';
import dragonRegistrationTypes from './dragonRegistrationTypes';

// function returnUpdateDragonRegistration(data) {
//   return {
//     type: dragonRegistrationTypes.POST_DRAGON_REGISTER,
//     payload: data
//   }
// }

function updateDragonName(data) {
  console.log('data', data)
  return {
    type: dragonRegistrationTypes.DRAGON_REGISTER_NAME,
    payload: data
  }
}

// export const returnDragonRegistration = (item) => {
//   console.log('item', item)
  
//   const registers = {
//     "createdAt": "",
//     "name": "",
//     "type": []
//   }
  
//   return (dispatch) => {
//     DragonList.postDragonDetails(registers)
//       .then((response) => {
//         dispatch(returnUpdateDragonRegistration(response.data))
//       })
//   }
// }

export const changeDragonName = (event) => {
  return (dispatch) => {
    dispatch(updateDragonName(event.target.value))
  }
}
