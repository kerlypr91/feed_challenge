import { createApi } from './index'

export function getPostListAPI () {
  return createApi().get('https://jsonplaceholder.typicode.com/posts')
}