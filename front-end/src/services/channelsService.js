import { createAxiosInstance } from './chat_api'
import * as tokenStorage from './tokenStorage'

import { CHANNELS, JOINED_CHANNELS } from "./mocks";

export const joinedChannels = async () => {
  const authToken = tokenStorage.getToken()
  const axios = createAxiosInstance({authToken})
  return JOINED_CHANNELS
}

export const allChannels = async () => {
  return CHANNELS
}
