import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextArea from '../textarea'
import TextInput from '../textinput'

export default class NewComment extends Component {
  static propTypes = {
    onAddCommentClick: PropTypes.func.isRequired,
  }

  state = {
    name: '',
    email: '',
    body: '',
    error: false
  }

  clearValues = () => {
    this.setState({
      name: '',
      email: '',
      body: '',
      error: false
    })
  }

  handleCommentChange = (stateKey, stateValue) => {
    this.setState({
      [stateKey]: stateValue,
      error: false
    })
  }

  handleAddCommentClick = () => {
    const { name, email, body } = this.state
    const { onAddCommentClick } = this.props

    if (!name || !email || !body) {
      this.setState({
        error: true
      })

      return
    }

    onAddCommentClick({
      name,
      email,
      body
    })

    this.clearValues()
  }

  render () {
    const { name, email, body, error } = this.state

    return (
      <div className="new_comment_component">
        <div className="comment_row">
          <label>
            <i className="fa fa-user"></i>&nbsp;&nbsp;&nbsp;Name
          </label>
          <div>
            <TextInput
              id='name'
              placeholder='Type your name here'
              value={name}
              type='text'
              onTextChange={this.handleCommentChange}
            />
          </div>
        </div>
        <div className="comment_row">
          <label>
            <i className="fa fa-google-plus" />&nbsp;&nbsp;&nbsp;Email
          </label>
          <div>
            <TextInput
              id='email'
              placeholder='Type your email here'
              value={email}
              type='email'
              onTextChange={this.handleCommentChange}
            />
          </div>
        </div>
        <div className="comment_row">
          <label>
            <i className="fa fa-comment" />&nbsp;&nbsp;&nbsp;Comment
            </label>
          <div>
            <TextArea
              id='body'
              placeholder='Type your comment here'
              value={body}
              onTextChange={this.handleCommentChange}
            />
          </div>
        </div>
        <button onClick={this.handleAddCommentClick}>AGREGAR</button>
        {error ? <label className="error">You must complete all fields</label> : null}
      </div>
    )
  }
}