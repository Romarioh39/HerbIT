import CSSModules from 'react-css-modules'
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import css from './index.css'
import connected from '../../../state/connect'
import { selector as mypage} from './reducer'
import * as myPageActions from './actions'

import { Button } from 'semantic-ui-react'

// import { Button } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'

class MyFriendsPage extends Component {
  componentDidMount() {
    this.props.myPageActions.getAllUsersForChat()
  //   const { match: { params: { roomId }}} = this.props
  //   console.log('Room Id', roomId)
  //   const uuidFromApi = '4fe7484d-7fe7-4213-be2e-c2d02947fc39'
  //   this.props.history.push(`/chatroom/${uuidFromApi}`)
  }
  
  render() {
    console.log('my friends', this.props.mypage)
    // const { match: { params: { roomId }}} = this.props
    // console.log('Room Id', roomId)
    return (
      <div styleName="signUp-container">
          <header>
          <button placeholder="Start" type="text"
            value={this.state} onClick={this.props.uuidFromApi} />
          </header>
        <div styleName="main">
          <aside>
          {/* {
          this.props.mypage.mypage.map ((element, index) => {
            return <div key={index}> My {index=1} friends list: {element}</div>
          })
        } */}
          </aside>
          <nav>
            nav
          </nav>
          <article>
            <p>section</p>
          </article>
        </div>
        <footer styleName="footer">
         <Button>+</Button>
         <Button>x</Button>
         {/* <Button onClick={get.uuidFromApi} >start</Button> */}
        </footer>
      </div>
    )
  }
}

export default withRouter(connected([mypage], [myPageActions])(CSSModules(MyFriendsPage, css)))