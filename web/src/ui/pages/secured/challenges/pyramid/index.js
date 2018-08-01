import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import css from './index.css'
import connected from 'State/connect'

class PyramidChallenge extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfLevels: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({ numberOfLevels: event.target.value })
  }

  render() {
    console.log('HERE I am in the render', this.state.numberOfLevels)
    return (
      <div styleName="container">
        <input type="number" value={this.state.numberOfLevels} onChange={this.handleInputChange} placeholder="Please enter the number of Levels" />
      </div>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(PyramidChallenge, css)))
