import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export default class Post extends PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    body: PropTypes.string,
    onCommentLinkClick: PropTypes.func.isRequired
  }

  static defaultProps = {
    title: '',
    body: ''
  }

  render () {
    const { id, title, body, onCommentLinkClick } = this.props

    return (
      <section className='post_container' id={id}>
        <header className='title'>
          <div className="logo">
            <i className="fa fa-reddit-alien" />
          </div>
          <span>{title}</span>
        </header>
        <div className="content">
          <div className='body'>{body}</div>
          <a onClick={onCommentLinkClick}>
            <i className="fa fa-comments-o" />
            See Post Comments
          </a>
        </div>

      </section>
    )
  }
}