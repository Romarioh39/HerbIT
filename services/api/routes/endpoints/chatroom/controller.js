export default class AuthController {
  constructor(router) {
    router.get('/messages', this.getMessages)
  }

  async getMessages(req, res) {
    res.send({ comments: 'hi , i am chatroom from the backend'})
  }
}
