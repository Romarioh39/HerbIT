import CSSModules from 'react-css-modules'
import React, { Component } from 'react'

import css from './index.css'
import connected from '../../../state/connect'
import { selector as mypage} from './reducer'
import * as myPageActions from './actions'

import { Button } from 'semantic-ui-react'

// import { Button } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'

class MyPage extends React.Component {
  componentDidMount() {
    let data = this.props.myPageActions.getAllUsersForChat()
    console.log("The Users: ", data)

    fetch('http://localhost:3000/api/favorites/1')
    .then((res) => { 
      console.log("The Animals: ", res) 
      console.log("Data: ", res)
    })
  }
  render() {
    return (
      <div styleName="signUp-container">
          <header>
            header
          </header>
        <div styleName="main">
          <aside>
            aside
          </aside>
          <nav>
            nav
          </nav>
          <article>
            <p>section</p>
          </article>
        </div>
        <footer styleName="footer">
         <Button >+</Button>
         <Button>x</Button>
        </footer>
      </div>
    )
  }
}

export default connected([mypage], [myPageActions])(CSSModules(MyPage, css))