import axios from "axios";
import * as tokenStorage from './tokenStorage'
export const login = async (params) => {
  // const res = await axios.post("localhost:3000/users/sign_in", {user: params})
  // console.info(res)
  // return res.data
  tokenStorage.saveToken("ABC")
  return { token: 'ABC', user: params.email}
}
