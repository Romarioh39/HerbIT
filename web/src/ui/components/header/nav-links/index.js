import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
// import { Herb } from "herb-ui"

class HeaderDefaultLinks extends Component {
  render() {
    return [
      <Link key="login" to="/mypage">
        <Button basic>Login</Button>
      </Link>,
      <Link key="create-account" to="/login">
        <Button basic>Sign Up</Button>
      </Link>
      // <Herb key="Herb" to="/login">
      //   <Button basic> Sign it</Button>
      // </Herb>
    ]
  }
}

export default HeaderDefaultLinks
