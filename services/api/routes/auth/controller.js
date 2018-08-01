// TODO Challenge 4 hook up the command
// import { authinticateLogin } from '../../commands/auth'

export default class AuthController {
  constructor(router) {
    router.post('/login', this.login)
   }

  async login(req, res) {
    //Remove the temporary logic below and hook up the command
    const { email, password } = req.body
    if (email === 'Romario@helio.com' && password === '123')
      res.send({ username: 'sweethands', email: 'romario@helio.com', password: '123' })
    else
      throw new Error('unauthorized user')
  }
}
