import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from './slider'
import connected from '../../../state/connect'
import { selector as animals } from './dummy_reducer'
import * as homepageActions from './dummy_actions'
import { selector as createaccounts } from '../../../process/users/create_reducer'
import * as createaccountActions from '../../../process/users/auth/create_actions'

class Homepage extends Component {
  componentDidMount() {
    this.props.homepageActions.fetchAnimals(2)
    this.props.createaccountActions.fetchCreateAccount()
  }

  render() {
    console.log('Animals', this.props.animals)
    console.log('I AM THE EMAIL', this.props.createaccounts.addingEmail)
    return (
      <div>
        {/* <Link to="/login">Login Page</Link> */}
        <Slider />
        {
          this.props.animals.animals.map ((element, index) => {
            return <div key={index}>this is my {index=1} favorite animal: {element}</div>
          })
        }
      </div>
    )
  }
}

export default connected([animals, createaccounts], [homepageActions, createaccountActions])(Homepage)
