import CSSModules from 'react-css-modules'
import connected from '../../../state/connect'
import React, { Component } from 'react'
import css from './index.css'
// import { selector as createaccount} from './reducer'
import * as createAccountActions from './actions'

class SignUp extends Component{
  state =  { email: '', password: '' }

  handleInputChange = (e) => { this.setState({ email: e.target.value })}

  handlePasswordChange = (e) => { this.setState({ password: e.target.value })}

  handleCreate = () => {
    const { email, password } = this.state
    this.props.createAccountActions.fetchCreateAccount(email, password)
  }

  render(){
    return(
      <div>
        <h1>create account here</h1>
        <p>information below</p>

        <input type="text" 
          value={ this.state.email } 
          onChange={this.handleInputChange}
          placeholder="Email" />
        <input type="password" 
          value={ this.state.password } 
          onChange={this.handlePasswordChange}
          placeholder="Password" />

        <button onClick={this.handleCreate} >Log In</button>

      </div>
    )
  }
}

export default connected([], [createAccountActions])(CSSModules(SignUp, css))



// class SignUp extends Component {
//   componentDidMount() {
//     console.log('i am the create account actions')
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
