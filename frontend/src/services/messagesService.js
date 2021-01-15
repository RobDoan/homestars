import {createAxiosInstance} from './chat_api'
import * as tokenStorage from './tokenStorage'

import {MESSAGES, MESSAGES2} from "./mocks";

export const getMessages = async (channel) => {
  const authToken = tokenStorage.getToken()
  const axios = createAxiosInstance({authToken})
  const res = await axios.get(`/v1/channels/${channel.id}/messages`)
  return res.data
}

export const sendMessage = async (channel, message) => {
  const authToken = tokenStorage.getToken()
  const axios = createAxiosInstance({authToken})
  const res = await axios.post(`/v1/channels/${channel.id}/messages`, {message: message})
  return res.data
}
