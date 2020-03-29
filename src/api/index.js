import { create } from 'apisauce'

export function createApi (baseURL = '') {
  const api = create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return api
}
