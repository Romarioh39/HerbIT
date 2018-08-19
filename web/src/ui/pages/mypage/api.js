import * as axiosWrapper from '../../../utilities/axios/wrapper'

export const getUser = {
  formatUrl: () => `/users`,
  request: (url) => axiosWrapper.get(url),
}
