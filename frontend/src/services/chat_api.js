import axios from 'axios'

const BaseURL = 'http://api.chat.app'

export function createAxiosInstance({timeout = 2500, authToken, contentType = 'application/json'}) {
  const instance = axios.create({
    baseURL: BaseURL
  })
  instance.defaults.timeout = timeout;
  instance.defaults.headers.common['Content-Type'] = contentType;
  if (authToken) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  }
  return instance

}



