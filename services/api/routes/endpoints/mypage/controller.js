export default class AuthController {
  constructor(router) {
    router.get('/users', this.getUsers)
  }

  async getUsers(res) {
    res.send({ users: 'hi whats up frontend'})
  }
}
