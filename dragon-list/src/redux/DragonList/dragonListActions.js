import DragonList from '../../models/dragon-list';

export function returnDragonList() {
  return (dispatch) => {
    const response = DragonList.getDragonList()
    console.log('response', response)
  }
}