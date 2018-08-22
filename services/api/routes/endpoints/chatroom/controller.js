export default class AuthController {
  constructor(router) {
    router.get('/users', this.getMessages)
  }

  async getMessages(res) {
    res.send({ messages: 'hi , i am chatroom from the backend'})
  }
}
