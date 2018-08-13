export default class AuthController {
  constructor(router) {
    router.get('/account', this.getAccount)
  }

  async getAccount(req, res) {
    res.send({ account: 'hi whats up frontend'})
  }
}
