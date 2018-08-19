import CSSModules from 'react-css-modules'
import React, { Component } from 'react'
import css from './index.css'
import connected from '../../../state/connect'
import { selector as chatroom} from './reducer'
import * as myChatActions from './action'

// import { Button } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'

class Chatroom extends React.Component {
  componentDidMount() {
    this.props.myChatActions.getInfoForChats()
  }
  render() {
    return (
      <div styleName="signUp-container">
          <header>
            header
          </header>
        <div styleName="main">
          <article>
            <p>section</p>
          </article>
        </div>
        <footer styleName="footer">
          Footer
        </footer>
      </div>
    )
  }
}

export default connected([chatroom], [myChatActions])(CSSModules(Chatroom, css))