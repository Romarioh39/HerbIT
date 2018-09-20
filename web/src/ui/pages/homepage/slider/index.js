import CSSModules from 'react-css-modules'
import React, { Component } from 'react'
import css from './index.css'
import connected from '../../../../state/connect'
import { selector as sliderpage } from './reducer'
import * as sliderpageActions from './actions'

// import { Arrows } from './icon'

class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      p1: 1,
      p2: 2,
      p3: 3
    }
  }
  componentDidMount() {
    this.props.sliderpageActions.fetchSliderImage()
  }
  render() {
      // const { slidingImages } = this.props.sliderpage

    return (
      <div styleName="main-container">
        <header styleName="secheader">
          <ol>
            <li>about me</li>
            <li>contact me</li>
          </ol>
        </header>
        <span href="#" styleName="Welcome">
          <a href="#">Welcome To My Portfolio</a>
        </span>
        <div styleName="main-pics-cont">
              <i  className="fas fa-angle-left myarr1" onClick={() => {
                console.log('Left')
                if (this.state.p1 === 1) {
                  this.setState({ p1: 5, p2: 1, p3: 2 })
                } else if (this.state.p2 === 1) {
                  this.setState({ p1: 4, p2: 5, p3: 1 })
                } else if (this.state.p3 === 1) {
                  this.setState({ p1: 3, p2: 4, p3: 5 })
                } else {
                  this.setState({ p1: this.state.p1 - 1, p2: this.state.p2 - 1, p3: this.state.p3 - 1 })
                }
              }} ></i>
            <div>
              <img styleName="car-pix" src={require(`../modal/pix/${this.state.p1}.jpg`)} alt="k" />
            </div>
            <div>
              <img styleName="car-pix" src={require(`../modal/pix/${this.state.p2}.jpg`)} alt="k" />
            </div>
            <div>
              <img styleName="car-pix" src={require(`../modal/pix/${this.state.p3}.jpg`)} alt="k" />
            </div>
              <i className="fas fa-angle-right myarr1" onClick={() => {
                console.log('Right')
                if (this.state.p1 === 5) {
                  this.setState({ p1: 4, p2: 5, p3: 1 })
                } else if (this.state.p2 === 5) {
                  this.setState({ p1: 5, p2: 1, p3: 2 })
                } else if (this.state.p3 === 5) {
                  this.setState({ p1: 1, p2: 2, p3: 3 })
                } else {
                  this.setState({ p1: this.state.p1 + 1, p2: this.state.p2 + 1, p3: this.state.p3 + 1 })
                }
              }} ></i>
          </div> 
          {/* {slidingImages} */}
          <footer>

          </footer>
      </div>
    )
  }
}

export default connected([sliderpage], [sliderpageActions])(CSSModules(Slider, css));
