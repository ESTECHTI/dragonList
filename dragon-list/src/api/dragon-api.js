import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseUrl: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/'
})

export const dragonApi = api