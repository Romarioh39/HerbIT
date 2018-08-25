import { call, put, takeLatest } from 'redux-saga/effects'

import * as api from './api'
import TYPES from './types'

export const name = 'myPageActions'


export function getAllUsersForChat() {
  console.log("Inside getAUFC 1")
  return {
    type: TYPES.FETCH_ALL_USERS_REQUEST
  }
}



export function* executeGetAllUsersForChat({}) {
  const url = api.getUsers.formatUrl()
  console.log("The URL33: ", url)
  try {
    console.log("Before 1st Y.")
    const res = yield call(api.getUsers.request, url)
    console.log("After 1st Y.")
    console.log('Api Response: ', res)
    console.log("THE DATA: ", res.data)
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
  takeLatest(TYPES.FETCH_ALL_USERS_REQUEST, executeGetAllUsersForChat)
]

export default sagas