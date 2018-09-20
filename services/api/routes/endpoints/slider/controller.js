import {randomSliderImage} from '../../commands/slider'
import { wrapAsyncFunc } from '../../../common/utils/wrap-async-route'

export default class AuthController {
  constructor(router) {
    router.get('/image', wrapAsyncFunc(this.getImage))
  }

  async getImage(req, res) {
    const image = await randomSliderImage()
    res.send({ image })
  }
}
