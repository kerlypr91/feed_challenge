import { createApi } from './index'

export function getPostCommentsAPI () {
  return createApi().get('https://jsonplaceholder.typicode.com/comments')
}