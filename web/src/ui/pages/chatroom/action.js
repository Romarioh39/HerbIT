import { call, put, takeLatest } from 'redux-saga/effects'

import * as api from './api'
import TYPES from './types'

export const name = 'myChatActions'

export function getInfoForChats(messages) {
  return {
    type: TYPES.FETCH_INFO_FOR_CHAT_REQUEST,
    messages
  }
}

export function* executeGetInfoForChats(messages) {
  const url = api.getInfoForChats.formatUrl(messages)
  try {
    const res = yield call(api.getInfoForChats.request, url)
    console.log('Api', res)
    yield put(getInfoForChatsSuccess(res.data.messages))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function getInfoForChatsSuccess({ InfoForChats }) {
  return {
    type: TYPES.FETCH_INFO_FOR_CHAT_SUCCESS,
    InfoForChats
  }
}

const sagas = [
  takeLatest(TYPES.FETCH_INFO_FOR_CHAT_REQUEST, executeGetInfoForChats),
]

export default sagas