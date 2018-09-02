// import CSSModules from 'react-css-modules'
// import connected from '../../../state/connect'
// import React, { Component } from 'react'
// import css from './index.css'
// import { withRouter } from 'react-router'
// import { selector as createaccount} from './reducer'
// import * as createaccountActions from './actions'

// class SignUp extends Component {
//   componentDidMount() {
//     this.props.createaccountActions.fetchCreateAccount()
//   }

//   render() {
//     console.log('SignUp now', this.props.createaccount)
//     return (
//       <body styleName="signUp-container">
//         <header styleName="head-text">
//           My name is romario 
//         </header>
//         <section styleName="body-input">
//           Whats up
//         </section>
//         <footer>
//           Hi
//         </footer>
//         <aside>
//           Hello
//         </aside>
//       </body>
//     )
//   }
// }

// export default withRouter(connected([createaccount], [createaccountActions])(CSSModules(SignUp, css)))
