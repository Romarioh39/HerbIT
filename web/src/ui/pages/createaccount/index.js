import React, { Component } from 'react'
import connected from '../../../state/connect'
import { selector as createaccount } from './reducer'
import * as createAccountActions from './actions'

class SignUp extends Component {
  componentDidMount() {
    this.props.createaccountActions.fetchCreateAccount()
  }

  render() {
    console.log('SignUp now', this.props.createaccount)
    return (
      <header>
        Create an Account
      </header>
    )
  }
}

export default connected([createaccount], [createAccountActions])(SignUp)
