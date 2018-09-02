import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
// import Modal from 'herb-ui'

class HeaderDefaultLinks extends Component {
  render() {
    return [
      <Link key="login" to="/login">
        <Button basic>Login</Button>
      </Link>,
      <Link key="/" to="/createaccount">
        <Button basic>Sign Up</Button>
      </Link>,
      // <Modal isOpen={true} /> 
    ]
  }
}

export default HeaderDefaultLinks
