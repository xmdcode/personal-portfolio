import axios from 'axios'

let baseURLAxios = process.env.NEXT_PUBLIC_API_URL

const axiosCms = axios.create({
  baseURL: baseURLAxios,
})

export default axiosCms
