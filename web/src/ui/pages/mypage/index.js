import CSSModules from 'react-css-modules'
import React, { Component } from 'react'
import css from './index.css'

import { Button } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'

class MyPage extends React.Component {
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
          Footer
        </footer>
      </div>
    )
  }
}

export default CSSModules(MyPage, css)
