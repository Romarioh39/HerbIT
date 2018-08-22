import CSSModules from 'react-css-modules'
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import css from './index.css'
import connected from '../../../state/connect'
import { selector as chatroom} from './reducer'
import * as myChatActions from './action'

import { Button } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'

class Chatroom extends Component {
  componentDidMount() {
    const { match: { params: { roomId }}} = this.props
    console.log('Room Id', roomId)
    const uuidFromApi = '123'
    this.props.history.push(`/chatroom/${uuidFromApi}`)
    //this.props.myChatActions.getInfoForChats(roomId)
  }
  render() {
    const { match: { params: { roomId }}} = this.props
    console.log('Room Id', roomId)
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
          <Button>+</Button>
        </footer>
      </div>
    )
  }
}

export default withRouter(connected([chatroom], [myChatActions])(CSSModules(Chatroom, css)))