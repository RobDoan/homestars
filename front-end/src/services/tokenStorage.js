const TOKEN_KEY = 'AUTH_TOKEN';

export const saveToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const deleteToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}

export const getToken = () => {
  localStorage.getItem(TOKEN_KEY)
}
