import CSSModules from 'react-css-modules'
import React, { Component } from 'react'
import css from './index.css'

class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fullName: '',
      email: '',
      password: ''
    }
  }

  summitInfo = () => {
    console.log("the state: ", this.state)
  }

  render() {
    return (
      <div styleName="signUp-container">
        <head styleName="head-text">
          <p>Create an account here</p>
        </head>
        <body styleName="body-input">
          <input type="text" placeholder="Full Name" value={this.state.fullName} onChange={(event) => { this.setState({ fullName: event.target.value }) }}/>
          <input type="email" placeholder="E-mail"/>
          <input type="password" placeholder="Password"/>
        </body>
        <footer styleName="footer-button">
          <button onClick={this.summitInfo}>Create</button>
        </footer>
      </div>
    )
  }
}

export default CSSModules(SignUp, css)
