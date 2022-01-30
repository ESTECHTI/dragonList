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
  
  static async deleteDragon(id) {
    const res = await DragonApi.delete(`/api/v1/dragon/${id}`)
    return res
  }
  
  static async createDragon(items) {
    const res = await DragonApi.post('/api/v1/dragon', items)
    return res
  }
  
  static async editDragon(id) {
    const res = await DragonApi.put(`/api/v1/dragon/${id}`)
    return res
  }
}