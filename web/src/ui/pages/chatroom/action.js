import { call, put, takeLatest } from 'redux-saga/effects'

import * as api from './api'
import TYPES from './types'



export const name = 'myChatActions'

export function fetchChatQueue(chatname) {
  return {
    type: TYPES.FETCH_CHAT_QUEUE_REQUEST,
    chatname
  }
}

export function* executeFetchChatQueue({ chatname }) {
  const url = api.fetchChatQueue.formatUrl(chatname)
  try {
    const res = yield call(api.fetchChatQueue.request, url, { chatname })
    console.log('Api', res)
    yield put(fetchChatQueueSuccess(res.data))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function fetchChatQueueSuccess({ queue, invites, requests }) {
  return {
    type: TYPES.FETCH_CHAT_QUEUE_SUCCESS,
    queue,
    invites,
    requests
  }
}


export function requestChat(userHandle) {
  console.log('Requesting chat for', userHandle)
  return {
    type: TYPES.REQUEST_CHAT,
    userHandle
  }
}

export function* executeRequestChat({ userHandle }) {
  const url = api.requestChat.formatUrl()
  try {
    const res = yield call(api.requestChat.request, url, { userHandle })
    console.log('Response from the api', res)
    yield put(requestChatSuccess(res.data))
  } catch (err) {
    console.log(err)
  }
}

export function requestChatSuccess(data) {
  return {
    type: TYPES.REQUEST_CHAT_SUCCESS,
    data
  }
}

const sagas = [
  takeLatest(TYPES.FETCH_CHAT_QUEUE_REQUEST, executeFetchChatQueue),
  takeLatest(TYPES.REQUEST_CHAT, executeRequestChat)
]

export default sagas