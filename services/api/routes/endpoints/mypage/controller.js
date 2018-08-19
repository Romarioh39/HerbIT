export default class AuthController {
  constructor(router) {
    router.get('/users', this.getAccount)
  }

  async getAccount(req, res) {
    res.send({ account: 'hi whats up frontend'})
  }
}
