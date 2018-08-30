/* eslint-disable no-console */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Input } from 'semantic-ui-react'
import CSSModules from 'react-css-modules'

import css from './index.css'

class Footer extends Component {
  handleFacebook = () => {
    console.log('The user has interest in FB')
  }
  handleLinkedIn = () => {
    console.log('The user has interest in LinkedIn')
  }
  handleTwitter = () => {
    console.log('The user has interest in Twitter')
  }

  render() {
    return (
      <div styleName="container">
        <div styleName="section">
          <div styleName="section-row">
            <div styleName="sub-section-item">
              <span>General</span>
            </div>
            <div styleName="sub-section-item">
              <span>Social</span>
            </div>
            <div styleName="sub-section-item-email">
              <span>SIGN UP FOR OUR FREE NEWSLETTER</span>
            </div>
          </div>
          <div styleName="section-row">
            <div styleName="sub-section-item-column">
              <Link to="/about-us">FAQs</Link>
              <Link to="/contact-us">Contact Us</Link>
            </div>
            <div styleName="sub-section-item-row">
              <div><Button basic icon onClick={this.handleFacebook}><Icon name="facebook f" color="blue" /></Button></div>
              <div><Button basic icon onClick={this.handleTwitter}><Icon name="twitter" color="blue" /></Button></div>
              <div><Button basic icon onClick={this.handleLinkedIn}><Icon name="linkedin" color="blue" /></Button></div>
            </div>
            <div styleName="sub-section-item-email">
              <Input action={{ color: 'blue', content: 'Send' }} placeholder="Your Email" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(Footer, css)
