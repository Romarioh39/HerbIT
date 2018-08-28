import * as axiosWrapper from '../../../utilities/axios/wrapper'

export const postAccounts = {
  formatUrl: () => `/createaccount/account/`,
  request: (url) => axiosWrapper.get(url),
}
