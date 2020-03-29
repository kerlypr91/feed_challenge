import { all, takeLatest } from 'redux-saga/effects'
import {
  GET_POST_LIST,
  GET_POST_COMMENTS,
  ADD_POST_COMMENT
} from '../actions/types'
import { fetchPostListSaga } from './posts'
import {
  fetchPostCommentsSaga,
  addPostCommentSaga
} from './comments'

export default function* rootSaga () {
  yield all([
    takeLatest(GET_POST_LIST, fetchPostListSaga),
    takeLatest(GET_POST_COMMENTS, fetchPostCommentsSaga),
    takeLatest(ADD_POST_COMMENT, addPostCommentSaga)
  ])
}
