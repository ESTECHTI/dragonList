import { DragonApi } from '../api/dragon-api'

export default class DragonList {
  
  static async getDragonList() {
    const res = await DragonApi.get('/api/v1/dragon')

    return res
  }
  
  static async getDragonDetails(id) {
    const res = await DragonApi.get(`/api/v1/dragon/${id}`)
    return res
  }
}