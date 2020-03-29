import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { getPostListAction } from '../actions/posts'
import Post from '../components/post'
import Loader from '../components/loader'
import './PostList.scss'

export class PostList extends Component {
  state = {
    loading: true
  }

  componentDidMount () {
    const { getPostList } = this.props

    getPostList()
  }

  componentDidUpdate (prevProps) {
    const { fetching: prevFetching } = prevProps
    const { fetching, error } = this.props

    if (prevFetching && !fetching && !error) {
      this.setState({
        loading: false
      })
    }
  }

  /** Event Handlers */
  handleCommentLinkClick = (postId) => () => {
    const { history } = this.props

    history.push('/comments', { postId })
  }

  /** Renders */

  renderPostList = () => {
    const { postList } = this.props

    return (
      <React.Fragment>
        <div className="post_title">
          <i className="fa fa-reddit" />&nbsp;&nbsp;&nbsp;
          POSTS FEED
        </div>
        <div className="post_list">
          {
            postList.map((post) => {
              const { id } = post
              const postProps = {
                ...post,
                key: id,
                onCommentLinkClick: this.handleCommentLinkClick(id)
              }

              return (
                <Post {...postProps} />
              )
            })
          }
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

    return this.renderPostList()
  }
}

export const mapStateToProps = (state) => {
  const { posts: { postList, fetching, error } } = state

  return {
    postList,
    fetching,
    error
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    getPostList: () =>
      dispatch(getPostListAction())
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostList)
)
