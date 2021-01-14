import { createAxiosInstance } from './chat_api'
import * as tokenStorage from './tokenStorage'

import { MESSAGES, MESSAGES2 } from "./mocks";

export const getMessages = async (channel) => {
  const authToken = tokenStorage.getToken()
  const axios = createAxiosInstance({authToken})
  return channel.id % 2 === 0 ? MESSAGES2 : MESSAGES
}

export const sendMessage = async (channel, message) => {
  console.info(message)
  const {content, messageType} = message
  return { id: Math.random(100000), content, user: {email: 'SOmeoneEls'}}
}
