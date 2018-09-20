import * as axiosWrapper from '../../../../utilities/axios/wrapper'

export const fetch = {
  formatUrl: () => `/slider/image/`,
  request: (url) => axiosWrapper.get(url),
}

