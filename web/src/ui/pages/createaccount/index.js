import CSSModules from 'react-css-modules'
import connected from '../../../state/connect'
import React, { Component } from 'react'
import css from './index.css'
// import { selector as createaccount} from './reducer'
import * as createAccountActions from './actions'

class SignUp extends Component{
  state =  { email: '', password: '' }

  handleInputChange = (e) => { this.setState({ email: e.target.value })}

  handlePasswordChange = (e) => { this.setState({ password: e.target.value })}

  handleCreate = () => {
    const { email, password } = this.state
    this.props.createAccountActions.fetchCreateAccount(email, password)
  }

  render(){
    return(
      <div styleName="signUp-container">
        <div styleName="title">Create Account Here</div>
        <div styleName="description">account information below</div>
        <input type="text" 
          value={ this.state.email } 
          onChange={this.handleInputChange}
          placeholder="Email" />
        <input type="password" 
          value={ this.state.password } 
          onChange={this.handlePasswordChange}
          placeholder="Password" />

        <button styleName="btn"
         onClick={this.handleCreate} >Done</button>
      </div>
    )
  }
}

export default connected([], [createAccountActions])(CSSModules(SignUp, css))
