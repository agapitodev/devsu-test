import axios from 'axios'

class HttpClient {
  _instance

  constructor(baseURL, authorId) {
    this._instance = axios.create({
      baseURL,
      headers: { authorId }
    })

    this.#initializeResponseInterceptor()
  }

  #initializeResponseInterceptor = () => {
    this._instance.interceptors.response.use(
      this.#handleResponse,
      this.#handleError
    )
  }

  #handleResponse = ({ data }) => data

  #handleError = (error) => Promise.reject(error)
}

export default HttpClient
