import { call, put, takeLatest } from 'redux-saga/effects'

import * as api from './api'
import TYPES from './types'

export const name = 'myPageActions'

export function getAllUsersForChat(name) {
  return {
    type: TYPES.FETCH_ALL_USERS_REQUEST,
    name
  }
}

export function* executeGetAllUsersForChat({name}) {
  const url = api.getUsers.formatUrl(name)
  try {
    const res = yield call(api.getUsers.request, url)
    console.log('Api', res)
    yield put(getAllUsersForChatSuccess(res.data))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function getAllUsersForChatSuccess({ users }) {
  return {
    type: TYPES.FETCH_ALL_USERS_SUCCESS,
    users
  }
}

const sagas = [
  takeLatest(TYPES.FETCH_ALL_USERS_REQUEST, executeGetAllUsersForChat),
]

export default sagas