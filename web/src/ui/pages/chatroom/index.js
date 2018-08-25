import CSSModules from 'react-css-modules'
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import css from './index.css'
import connected from '../../../state/connect'
import { selector as chatqueue} from './reducer'
import { selector as user } from '../../../process/users/reducer'

import * as myChatActions from './action'
// import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
// import { get } from 'http';
// import { Link } from 'react-router-dom'

class ChatNow extends Component {
  componentDidMount() {
    // this.props.myChatActions.fetchChatQueue()
  //   const { match: { params: { usersId }}} = this.props
  //   console.log('users Id', usersId)
  //   const finduuidFromApi = '8b5213b1-4c41-499e-a1db-93da54713db'
  //   this.props.history.push(`/myfriendspage/${finduuidFromApi}`)
  }
  // static propTypes = {
  //   match: PropTypes.object.isRequired,
  //   location: PropTypes.object.isRequired,
  //   history: PropTypes.object.isRequired
  // }
  // componentDidMount(){
  //   const { match } = this.props
  //   const { name: chatname } = match.params
  //   this.props.myChatActions.fetchChatQueue(chatname)
  // }

  // checkForRequest = (user) => {
  //   let found = false;
  //   const { requests } = this.props.chatqueue
  //   for(var i = 0; i < requests.length; i++) {
  //       if (user.userHandle === requests[i].userHandle) {
  //           found = true;
  //           break;
  //       }
  //   }

  //   return found
  // }

  // requestGame = (userHandle) => {
  //   this.props.gameQueueActions.requestGame(userHandle)
  // }
  render() {
    // console.log=('lets chat', this.props.chatqueue)
    // const { match: { params: { usersId }}} = this.props
    // console.log('users Id', usersId)
    // const { match, chatqueue} = this.props
    // const { name: chatname } = match.params
    return (
      <div styleName="signUp-container">
          <header>Head</header>
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

export default withRouter(connected([user, chatqueue], [myChatActions])(CSSModules(ChatNow, css)))