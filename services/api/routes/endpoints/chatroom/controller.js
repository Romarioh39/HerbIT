import { exists } from "fs";
import { queue, makeRequest } from "../../commands/queue";
import { wrapAsyncFunc } from '../../../common/utils/wrap-async-route'

export default class AuthController {
  constructor(router) {
    router.put('/chatroom', wrapAsyncFunc(this.updateChat)),
    router.get('/queue/:name', wrapAsyncFunc(this.getQueue)),
    router.post('/request', wrapAsyncFunc(this.requestChat))
  }

  async updateChat(req, res) {
    const { chat } = req.body
    const updatedChat = await nextMove(chat)
    res.send({ chat: updatedChat.board, chater: updatedChat.chater })
  }

  async getQueue(req, res) {
    const { name } = req.params
    const token = req.user

    const results = await queue(name, token.userHandle)
    res.send(results)
  }

  async requestChat(req, res) {
    const { userHandle } = req.body
    const token = req.user
    const results = await makeRequest(token.userHandle, userHandle)
    res.send(results)
  }
}