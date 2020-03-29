import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export default class TextInput extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
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
    const { id, type, value, placeholder } = this.props

    return (
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={this.handleTextChange}
      />
    )
  }
}