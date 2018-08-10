import CSSModules from 'react-css-modules'
import React, { Component } from 'react'
import css from './index.css'

import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fullName: '',
      email: '',
      password: '',
      tel: ''
    }
  }

  summitInfo = () => {
    console.log("the state: ", this.state)
  }

  render() {
    return (
      <body styleName="signUp-container">
        <header styleName="head-text">
          <p>Create an account here</p>
        </header>
        <section styleName="body-input">
          <input type="text" placeholder="Full Name" value={this.state.fullName} onChange={(event) => { this.setState({ fullName: event.target.value }) }} />
          <input type="email" placeholder="E-mail" value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }} />
          <input type="tel" placeholder="Phone Number" value={this.state.tel} onChange={(event) => { this.setState ({ tel: event.target.value }) }} />
          <input type="password" placeholder="Password" value={this.state.password} onChange={(event) => { this.setState({ password: event.target.value }) }} />
        </section>
        <footer>
        <Link key="signUp" to="/login">
          <Button className='button' onClick={this.summitInfo} basic>Create</Button>
        </Link>
        </footer>
      </body>
    )
  }
}

export default CSSModules(SignUp, css)
