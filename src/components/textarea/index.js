import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export default class TextArea extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onTextChange: PropTypes.func
  }

  handleTextChange = (event) => {
    const { id, onTextChange } = this.props
    const { target: { value } } = event

    return onTextChange(id, value)
  }

  render () {
    const { id, value, placeholder } = this.props

    return (
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        rows={4}
        rows={7}
        onChange={this.handleTextChange}
      />
    )
  }
}