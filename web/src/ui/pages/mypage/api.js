import * as axiosWrapper from '../../../utilities/axios/wrapper'

export const getUsers = {
  formatUrl: () => `/chatroom/users`,
  request: (url) => axiosWrapper.get(url),
}
