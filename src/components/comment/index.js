import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export default class Comment extends PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    postId: PropTypes.number.isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string
  }

  static defaultProps = {
    name: '',
    email: '',
    body: ''
  }

  render () {
    const { id, name, email, body } = this.props

    return (
      <section className='comment_container' id={id}>
        <div className="logo">
          <i className="fa fa-commenting" />
        </div>
        <div className="content">
          <div className="user_data">
            <span className='name'>{name}</span>
            <span className='email'>{email}</span>
          </div>
          <div className='body'>{body}</div>
        </div>
      </section>
    )
  }
}