import * as axiosWrapper from '../../../utilities/axios/wrapper'

export const getUsers = {
  formatUrl: () => `/myfriendspage/users`,
  request: (url) => axiosWrapper.get(url),
}

