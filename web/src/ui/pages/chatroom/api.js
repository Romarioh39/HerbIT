import * as axiosWrapper from '../../../utilities/axios/wrapper'

export const fetchChatQueue = {
  formatUrl: (chatname) => `/chat/queue/${chatname}`,
  request: (url, body) => axiosWrapper.get(url),
}

export const requestGame = {
  formatUrl: () => `/chat/request`,
  request: (url, body) => axiosWrapper.post(url, body),
}