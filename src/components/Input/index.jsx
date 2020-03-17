import React, { Component } from "react"
import PropTypes from "prop-types"

import "./styles.css"

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  focus() {
    this.inputElement.focus()
  }

  render() {
    const { type, css, defaultValue, placeholder, onBlur, name } = this.props
    return (
      <input
        type={type}
        name={name}
        className={`main-input ${css}`}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onBlur={onBlur}
      />
    )
  }
}

Input.propTypes = {
  css: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string
}

Input.defaultProps = {
  css: "default",
  defaultValue: "",
  placeholder: "",
  onBlur: () => "",
  name: "",
  type: "text"
}
