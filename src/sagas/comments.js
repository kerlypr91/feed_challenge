import { put, call, delay } from 'redux-saga/effects'
import {
  GET_POST_COMMENTS_IN_PROGRESS,
  GET_POST_COMMENTS_SUCCESS,
  GET_POST_COMMENTS_FAILURE,
  ADD_POST_COMMENT_IN_PROGRESS,
  ADD_POST_COMMENT_SUCCESS,
  ADD_POST_COMMENT_FAILURE
} from '../actions/types'
import { getPostCommentsAPI } from '../api/comments'

export function* fetchPostCommentsSaga (action) {
  yield put({ type: GET_POST_COMMENTS_IN_PROGRESS })

  const { payload: { postId } } = action

  try {
    const response = yield call(getPostCommentsAPI)

    const { data, ok } = response

    if (ok) {
      const results = data.filter((item) => item.postId === postId) || []

      yield put({ type: GET_POST_COMMENTS_SUCCESS, payload: { results, postId } })
    }
  } catch (e) {
    yield put({ type: GET_POST_COMMENTS_FAILURE, payload: e })
  }
}

export function* addPostCommentSaga (action) {
  yield put({ type: ADD_POST_COMMENT_IN_PROGRESS })

  const { payload: { postId, comment } } = action

  try {
    yield delay(800) // to mimic server possible delay

    yield put({ type: ADD_POST_COMMENT_SUCCESS, payload: { postId, comment } })

  } catch (e) {
    yield put({ type: ADD_POST_COMMENT_FAILURE, payload: e })
  }
}