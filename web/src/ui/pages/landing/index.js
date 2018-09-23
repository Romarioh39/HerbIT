// import React, { Component } from 'react'
// import CSSModules from 'react-css-modules'

// import css from './index.css'
// import connected from '../../../state/connect'
// import AdminLanding from './admin'
// import UserLanding from './user'
// import { selector as user } from '../../../process/users/reducer'
// import { protectedRoute } from '../../../process/users/auth'


// class LandingPage extends Component {
//   render() {
//     const { admin } = this.props.user

//     return admin ? <AdminLanding /> : <UserLanding />
//   }
// }

// export default connected([user], [])(protectedRoute(CSSModules(LandingPage, css)))
