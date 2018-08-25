export default class AuthController {
  constructor(router) {
    router.get('/users', this.getUsers)
  }

  async getUsers(req, res) {
    console.log("Hi!!!!! ")
    res.send({ users: 'hi whats up frontend'})
  }
}
