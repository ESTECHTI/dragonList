import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://5c4b2a47aa8ee500142b4887.mockapi.io',
})

function handleRequestSuccess(req, res) {
  return req
}

function handleRequestError(err) {
  return err
}

function handleResponseSuccess(req, res) {
  return req
}

function handleResponseError(err) {
  if (err.response && err.response.status === 401) {
    const targetUrl = window.localtion.hash.slice(1)
    window.sessionStorage.setItem('targetUrl', targetUrl)
  }
}

api.interceptors.request.use(handleRequestSuccess, handleRequestError)
api.interceptors.response.use(handleResponseSuccess, handleResponseError)

export const DragonApi = api