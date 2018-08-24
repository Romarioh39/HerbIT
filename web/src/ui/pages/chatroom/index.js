import CSSModules from 'react-css-modules'
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import css from './index.css'
import connected from '../../../state/connect'
import { selector as chatroom} from './reducer'
import * as myChatActions from './action'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
// import { get } from 'http';
// import { Link } from 'react-router-dom'

class ChatNow extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  componentDidMount(){
    const { match } = this.props
    const { name: chatname } = match.params
    this.props.myChatActions.fetchChatQueue(chatname)
  }

  // componentDidMount() {
  //   const { match: { params: { roomId }}} = this.props
  //   console.log('Room Id', roomId)
  //   const uuidFromApi = '123'
  //   this.props.history.push(`/chatroom/${uuidFromApi}`)
  //   //this.props.myChatActions.ChatQueue(roomId)
  // }
  requestGame = (userHandle) => {
    this.props.gameQueueActions.requestGame(userHandle)
  }
  render() {
    const { match, chatqueue } = this.props
    const { name: chatname } = match.params
    // const { match: { params: { roomId }}} = this.props
    // console.log('Room Id', roomId)
    return (
      <div styleName="signUp-container">
        <div>
          {chatqueue}
        </div>
        <div>
          {chatname}
        </div>
          <header>
            {/* <button onclick={get.uuidFromApi}>Chat</button> */}
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

export default withRouter(connected([chatroom], [myChatActions])(CSSModules(ChatNow, css)))