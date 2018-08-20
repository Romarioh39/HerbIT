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
    this.props.myPageActions.getInfoForChats()
  }
  render() {
    console.log('InfoForChats', this.props.getInfoForChats)

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
         <Button>+</Button>
         <Button>x</Button>
        </footer>
      </div>
    )
  }
}

export default connected([mypage], [myPageActions])(CSSModules(MyPage, css))