import { dragonApi } from '../api/dragon-api'

export default class DragonList {
  constructor(obj) {

  }

  static async getDragonList() {
    const res = await dragonApi.get('api/v1/dragon')

    return res
  }
}