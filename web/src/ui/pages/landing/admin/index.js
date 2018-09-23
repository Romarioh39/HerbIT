import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import css from './index.css'

class AdminLanding extends Component {
  render() {
    return (
      <div>
        This is for the admins
      </div>
    )
  }
}

export default CSSModules(AdminLanding, css)
