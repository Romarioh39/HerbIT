import * as axiosWrapper from '../../../utilities/axios/wrapper'

export const fetch = {
  formatUrl: () => `/InfoForChats/messages`,
  request: (url) => axiosWrapper.get(url),
}
