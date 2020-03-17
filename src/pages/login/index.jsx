import React, { Component } from "react"
import "./styles.css"
import { Redirect } from "react-router-dom"
import Swal from "sweetalert2"
import Input from "../../components/Input"
import Form from "../../components/Form"
import logo from "./logoECOS.png"
import Button from "../../components/Button"
import Api from "../../services/Api"
import { login } from "../../services/Auth"

export default class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.api = new Api()
    this.state = {
      username: "",
      password: "",
      access: false
    }
  }

  handleChange = event => {
    if (event.target.name === "password") {
      this.setState({ password: event.target.value })
    }
    if (event.target.name === "username") {
      this.setState({ username: event.target.value })
    }
  }

  alert = (icon, title) => {
    this.Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      onOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer)
        toast.addEventListener("mouseleave", Swal.resumeTimer)
      }
    })
    this.Toast.fire({
      icon,
      title
    })
  }

  signin = async () => {
    const { username, password } = this.state
    await this.api
      .postLogin(username, password)
      .then(response => {
        if (response.status === 200) {
          login(response.headers.authorization)
          this.alert("success", "Signed in successfully")
          this.setState({ access: true })
        }
      })
      .catch(() => {
        this.setState({ access: false })
        this.alert("error", "Failed to sign in!")
      })
  }

  render() {
    const { access } = this.state
    if (access) return <Redirect to={{ pathname: "/home" }} />
    return (
      <section id="main-login">
        <Form>
          <img className="form-logo" src={logo} alt="" />
          <Input
            name="username"
            placeholder="Username"
            onBlur={this.handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onBlur={this.handleChange}
          />
          <section id="separate-login-buttons">
            <Button value="Sign in" onClick={this.signin} />
            <Button value="Sign up" />
          </section>
        </Form>
      </section>
    )
  }
}
