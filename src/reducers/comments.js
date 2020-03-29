import {
  GET_POST_COMMENTS_IN_PROGRESS,
  GET_POST_COMMENTS_SUCCESS,
  GET_POST_COMMENTS_FAILURE,
  ADD_POST_COMMENT_SUCCESS
} from '../actions/types'

export const initialState = {
  commentList: {},
  fetching: false,
  error: null
}

const convertArrayToObject = (array, key) => {
  const initialValue = {}

  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue)
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POST_COMMENTS_IN_PROGRESS:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case GET_POST_COMMENTS_SUCCESS:
      return getPostCommentsSuccess(state, action)
    case ADD_POST_COMMENT_SUCCESS:
      return addPostCommentSuccess(state, action)
    case GET_POST_COMMENTS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: { ...action.payload }
      }
    default:
      return state
  }
}

function getPostCommentsSuccess (state, action) {
  const { payload: { postId, results } } = action
  const { commentList } = state

  const resultsObj = convertArrayToObject(results, 'id')
  const { comments: prevPostComments } = commentList[postId] || {}

  return {
    ...state,
    commentList: {
      ...commentList,
      [postId]: {
        postId,
        comments: {
          ...prevPostComments || {},
          ...resultsObj
        }
      }
    },
    fetching: false,
    error: null
  }
}

function addPostCommentSuccess (state, action) {
  const { payload: { postId, comment } } = action
  const { commentList } = state

  const { comments: prevPostComments } = commentList[postId] || {}
  const commentsArray = Object.values(prevPostComments)
  const newId = commentsArray[commentsArray.length - 1].id + 1

  return {
    ...state,
    commentList: {
      ...commentList,
      [postId]: {
        postId,
        comments: {
          ...prevPostComments || {},
          [newId]: {
            ...comment,
            id: newId,
            postId
          }
        }
      }
    }
  }
}
