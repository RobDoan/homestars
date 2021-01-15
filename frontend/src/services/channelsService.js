import {createAxiosInstance} from './chat_api'
import * as tokenStorage from './tokenStorage'

export const joinedChannels = async () => {
  const authToken = tokenStorage.getToken()
  const axios = createAxiosInstance({authToken})
  return axios.get('/v1/channels/joined_channels').then(r => r.data)
}

export const allChannels = async () => {
  const authToken = tokenStorage.getToken()
  const axios = createAxiosInstance({authToken})
  const res =  await axios.get('/v1/channels')
  return res.data
}


export const joinChannel = async(channel) => {
  const authToken = tokenStorage.getToken()
  const axios = createAxiosInstance({authToken})
  const res = await axios.put(`/v1/channels/${channel.id}/join`)
  return res.data
}
