import { call, put, takeLatest } from 'redux-saga/effects'
import { normalize } from 'normalizr'

import * as api from './api'
import TYPES from './types'

export const name = 'createAccountActions'

export function fetchCreateAccount(email, password) {
  return {
    type: TYPES.CREATE_USER_ACCOUNT,
    email,
    password
    }
}

export function* executeCreateAccount({ email, password }) {
  const url = api.postAccounts.formatUrl()
  try {
    const res = yield call(api.postAccounts.request, url, {email, password})
    console.log('data from the api', res.data)
    yield put(postAllUserAccountSuccess(res.data))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function postAllUserAccountSuccess(accounts) {
  return {
    type: TYPES.CREATE_USER_SUCCESS,
    accounts
  }
}


const sagas = [
  takeLatest(TYPES.CREATE_USER_ACCOUNT, executeCreateAccount)
]


export default sagas