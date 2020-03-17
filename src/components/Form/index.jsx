import React, { Component } from "react"

import "./styles.css"

export default class Form extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props
    return <form className="main-form">{children}</form>
  }
}
