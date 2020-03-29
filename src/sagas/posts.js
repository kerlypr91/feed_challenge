import { put, call, delay } from 'redux-saga/effects'
import {
  GET_POST_LIST_IN_PROGRESS,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_FAILURE
} from '../actions/types'
import { getPostListAPI } from '../api/posts'

export function* fetchPostListSaga (action) {
  yield put({ type: GET_POST_LIST_IN_PROGRESS })

  yield delay(800)

  try {
    const response = yield call(getPostListAPI)

    const { data, ok } = response

    if (ok) {
      yield put({ type: GET_POST_LIST_SUCCESS, payload: data })
    }
  } catch (e) {
    yield put({ type: GET_POST_LIST_FAILURE, payload: e })
  }
}
