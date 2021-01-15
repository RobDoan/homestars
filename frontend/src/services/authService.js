import * as tokenStorage from './tokenStorage'
import {createAxiosInstance} from "./chat_api";

export const login = async (params) => {
  const axios = createAxiosInstance()
  const res = await axios.post(`/users/sign_in.json`, {user: params})
  const data = res.data
  tokenStorage.saveToken(data.token)
  return res.data
}

export const checkLogin = async () => {
  const authToken = tokenStorage.getToken()
  const axios = createAxiosInstance({authToken})
  const res = await axios.get(`/v1/my_profile`)
  return res.data
}
