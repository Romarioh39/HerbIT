export default class AuthController {
  constructor(router) {
    router.get('/account', this.getAccount)
  }

  async getAccount(req, res) {
    console.log('Hello!!!')
    res.send({ account: 'Lets create an account front-end'})
  }
}
