import CSSModules from 'react-css-modules'
import React, { Component } from 'react'
import css from './index.css'

import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class SignUp extends React.Component {
  render() {
    return (
      <body styleName="signUp-container">
        <header styleName="head-text">
        My name is romario 
        </header>
        <section styleName="body-input">
        Whats up
        </section>
        <footer>
        Hi
        </footer>
        <aside>
         Hello
        </aside>
      </body>
    )
  }
}

export default CSSModules(SignUp, css)