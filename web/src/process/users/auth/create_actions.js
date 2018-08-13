import { call, put, takeLatest } from 'redux-saga/effects'
import { normalize } from 'normalizr'

import api from './create_api'
import TYPES from '../create_types'
import LocalStorage from '../../../utilities/local-storage/token'

export const name = 'createaccountActions'

export function fetchCreateAccount(email) {
  console.log("HERE I AM")
  return {
    type: TYPES.CREATE_USER_ACCOUNT
    }
}


export function* executeCreateAccount() {
  const url = api.fetch.formatUrl()
  try {
    const res = yield call(api.fetch.request, url)
    yield put(fetchSuccess(res.data.email))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function fetchSuccess() {
  return {
    type: TYPES.CREATE_USER_SUCCESS,
    email
  }
}

const sagas = [
  takeLatest(TYPES.CREATE_USER_ACCOUNT, executeCreateAccount)
]

export default sagas