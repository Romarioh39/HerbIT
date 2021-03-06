import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Slider from './slider'
import connected from '../../../state/connect'
import { selector as animals } from './dummy_reducer'
import * as homepageActions from './dummy_actions'

class Homepage extends Component {
  componentDidMount() {
    this.props.homepageActions.fetchAnimals(2)
  }

  render() {
    console.log('Animals', this.props.animals)
    return (
      <div>
        <Slider />
        {/* {
          this.props.animals.animals.map ((element, index) => {
            return <div key={index}>this is my {index=1} favorite animal: {element}</div>
          })
        } */}
      </div>
    )
  }
}

export default connected([animals], [homepageActions])(Homepage)
