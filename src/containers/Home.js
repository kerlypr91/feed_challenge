import React, { Component } from 'react'
import { withRouter } from 'react-router'
import './Home.scss'

export class Home extends Component {
  handlePostsLinkClick = () => {
    const { history } = this.props

    history.push('/posts')
  }

  render () {
    return (
      <div className="home_container">
        <i className="fa fa-reddit-alien" />
        <span className="welcome">Welcome to the Feed Challenge</span>
        <span id="link" className="link" onClick={this.handlePostsLinkClick}><i className="fa fa-external-link" />Click here to see latest posts</span>
      </div>
    )
  }
}

export default withRouter(Home)