import { GET_POST_LIST } from './types'

// Get Post List Action - dispatches saga
export function getPostListAction () {
  return {
    type: GET_POST_LIST,
    payload: {}
  }
}
