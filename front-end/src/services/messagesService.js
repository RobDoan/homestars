import { createAxiosInstance } from './chat_api'
import * as tokenStorage from './tokenStorage'

import { MESSAGES, MESSAGES2 } from "./mocks";

export const getMessages = async (channel) => {
  const authToken = tokenStorage.getToken()
  const axios = createAxiosInstance({authToken})
  console.info("channel", channel.id)
  return  channel.id % 2 === 0 ? MESSAGES2 : MESSAGES
}
