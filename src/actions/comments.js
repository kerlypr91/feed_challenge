import {
  GET_POST_COMMENTS,
  ADD_POST_COMMENT
} from './types'

// Get Post List Action - dispatches saga
export function getPostCommentsAction (postId) {
  return {
    type: GET_POST_COMMENTS,
    payload: { postId }
  }
}

export function addPostCommentAction (postId, comment) {
  return {
    type: ADD_POST_COMMENT,
    payload: { postId, comment }
  }
}

