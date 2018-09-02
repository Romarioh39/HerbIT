import * as axiosWrapper from '../../../utilities/axios/wrapper'

export const postAccounts = {
  formatUrl: () => `/accounts/`,
  request: (url, body) => axiosWrapper.post(url, body),
}
