import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import {
  getPostCommentsAction,
  addPostCommentAction
} from '../actions/comments'
import Comment from '../components/comment'
import NewComment from '../components/comment/NewComment'
import { isEqual } from 'lodash'
import './PostComments.scss'
import Loader from '../components/loader'

export class PostComments extends Component {
  state = {
    loading: true,
    postId: null,
    commentData: {}
  }

  componentDidMount () {
    const { location: { state: { postId } }, getPostComments } = this.props

    this.setState({
      postId
    }, () => {
      getPostComments(postId)
    })
  }

  componentDidUpdate (prevProps) {
    const { fetching: prevFetching, commentList: prevCommentList } = prevProps
    const { fetching, error, commentList } = this.props
    const { postId } = this.state

    if (prevFetching && !fetching && !error) {
      this.setState({
        loading: false,
        commentData: commentList[postId]
      })

      return
    }

    if (!isEqual(prevCommentList, commentList)) {
      this.setState({
        commentData: commentList[postId]
      })

      return
    }
  }

  /** Event Handlers */

  handleAddCommentClick = (newComment) => {
    const { addPostComment } = this.props
    const { postId } = this.state

    addPostComment(postId, newComment)
  }


  handleBackClick = () => {
    const { history } = this.props

    history.push('/posts')
  }

  /** Renders */

  renderComments = () => {
    const { commentData: { comments } } = this.state
    const commentsObj = Object.values(comments)

    return (
      <React.Fragment>
        <div className="comments_header">
          <div className="back_button" onClick={this.handleBackClick}>
            <i className="fa fa-arrow-left" />&nbsp;&nbsp;&nbsp;
            Back to Posts
          </div>
          <div className="title">Comments Feed</div>
        </div>
        <div className="comments_container">
          {
            commentsObj.map((comment) => {
              const { id } = comment
              const commentProps = {
                ...comment,
                key: id
              }

              return (
                <Comment {...commentProps} />
              )
            })
          }
          <NewComment onAddCommentClick={this.handleAddCommentClick} />
        </div>
      </React.Fragment>

    )
  }

  render () {
    const { loading } = this.state

    if (loading) {
      return (
        <div className="loader_container">
          <Loader />
        </div>
      )
    }

    return this.renderComments()
  }
}

export const mapStateToProps = (state) => {
  const { comments: { commentList, fetching, error } } = state

  return {
    commentList,
    fetching,
    error
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    getPostComments: (postId) =>
      dispatch(getPostCommentsAction(postId)),
    addPostComment: (postId, comment) =>
      dispatch(addPostCommentAction(postId, comment))
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostComments)
)
