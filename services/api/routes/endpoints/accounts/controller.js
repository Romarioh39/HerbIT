import { createAccount } from '../../commands/accounts'

export default class AuthController {
  constructor(router) {
    router.post('/', this.makeAccount)

  }

  async makeAccount(req, res) {
    const {email, password} = req.body
    console.log('Hello!!!', email, password)
    const user = await createAccount(email, password)
    res.send({ user })
  }
}

// import { authinticateLogin } from '../../commands/auth'

// // function wrapAsyncFunc (asyncRoute) {
// //   return function routeWrapper(req, res, next) {
// //     return asyncRoute(req, res, next).catch(next)
// //   }
// // }

// export default class AuthController {
//   constructor(router) {
//     router.get('/account', this.getAccount)
//     router.post('/login', this.login)
//     router.get('/jwt/login', this.loginByJwt)
//     router.post('/recover', this.recover)
//   }

//   async login(req, res) {
//     const { email, password } = req.body
//     console.log('here i error', email, password)
//     const results = await authinticateLogin(email, password)
//     res.send(results)
//   }

//   async loginByJwt(req, res) {
//     const token = req.user
//     res.send({
//       user: {
//         firstName: token.firstName,
//         lastName: token.lastName,
//         middleName: token.middleName,
//         suffix: token.suffix,
//         userHandle: token.userHandle,
//         username: token.username,
//         email: token.email,
//         joinedDate: token.joinedDate
//       }
//     })
//   }

//   async recover(req, res) {
//     const { email } = req.body
//     res.sendStatus(200)
//   }
// }
