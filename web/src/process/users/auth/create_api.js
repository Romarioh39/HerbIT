import * as axiosWrapper from '../../../utilities/axios/wrapper'

export const fetch = {
  formatUrl: () => `/create/account/`,
  request: (url) => axiosWrapper.get(url),
}
