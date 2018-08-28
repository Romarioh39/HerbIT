import { call, put, takeLatest } from 'redux-saga/effects'
// import { normalize } from 'normalizr'

import api from './api'
import TYPES from './types'

export const name = 'createAccountActions'

export function fetchCreateAccount() {
  console.log("HERE I AM")
  return {
    type: TYPES.CREATE_USER_ACCOUNT
    }
}


export function* executeCreateAccount() {
  const url = api.postAccounts.formatUrl()
  try {
    const res = yield call(api.postAccounts.request, url)
    yield put(postAllUserAcountSuccess(res.data))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function postAllUserAcountSuccess(accounts) {
  return {
    type: TYPES.CREATE_USER_SUCCESS,
    accounts
  }
}

const sagas = [
  takeLatest(TYPES.CREATE_USER_ACCOUNT, executeCreateAccount)
]

export default sagas