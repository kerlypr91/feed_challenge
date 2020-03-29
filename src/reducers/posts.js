import {
  GET_POST_LIST_IN_PROGRESS,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_FAILURE
} from '../actions/types'

export const initialState = {
  postList: [],
  fetching: false,
  error: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POST_LIST_IN_PROGRESS:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case GET_POST_LIST_SUCCESS:
      const { payload } = action

      return {
        ...state,
        postList: payload,
        fetching: false,
        error: null
      }
    case GET_POST_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error: { ...action.payload }
      }
    default:
      return state
  }
}
