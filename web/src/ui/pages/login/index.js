import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
// import { Button, Icon, Input } from 'semantic-ui-react'
// import { protectedRoute } from '../index'
import css from './index.css'
import { loginProcess } from '../../../process/users/auth'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loading: false,
      error: false
    }
  }

  handleInputEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  handleInputPassword = (event) => {
    this.setState({ password: event.target.value })
  }

  handleClick = () => {
    const { email, password } = this.state

    console.log('About to check')
    if (email.indexOf('@') === -1) {
      this.setState({ error: true })
      return
    }
    console.log('here')
   this.props.loginProcess(email, password)
  }

  render() {
    return (
      <div>
        <div styleName="title">Sign in to your account here</div>
        <div styleName="description"> Sign in with your information below</div>
        {this.state.loading ? <div styleName="loading" /> : null}
        {this.state.error ? <div>Please provide a correct email</div> : null}
        <form styleName="form">
          <input icon="user circle" placeholder="Your Email" type="text"
            value={this.state.email} onChange={this.handleInputEmail} />
          <input icon="user circle" placeholder="Enter Password" type="password"
            value={this.state.password} onChange={this.handleInputPassword} />
          <button styleName="btn" type="button" onClick={this.handleClick}>
            Login
          </button>
          <Link to="/forgotten-password">Forgot Password?</Link>
        </form>
      </div>
    )
  }
}

export default loginProcess(CSSModules(Login, css))
