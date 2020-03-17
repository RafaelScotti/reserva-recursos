import React, { Component } from "react"
import PropTypes from "prop-types"

import "./styles.css"

export default class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { disabled, formId, value, onClick } = this.props
    return (
      <button
        className="main-button"
        type="button"
        form={formId}
        disabled={disabled}
        onClick={onClick}
      >
        {value}
      </button>
    )
  }
}

Button.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  formId: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  value: "",
  disabled: false,
  formId: "",
  onClick: () => ""
}
