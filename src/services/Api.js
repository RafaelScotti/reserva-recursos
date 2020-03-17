import axios from "axios"
import { getToken } from "./Auth"

export default class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "https://heroku-booking-resources.herokuapp.com"
    })
    this.api.interceptors.request.use(async config => {
      const token = getToken()
      if (token) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `${token}`
      }
      return config
    })
  }

  postLogin = (username, password) =>
    this.api.post("/login", {
      username,
      password
    })
}
