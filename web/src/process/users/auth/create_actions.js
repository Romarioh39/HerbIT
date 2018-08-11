import { call, put, takeLatest } from 'redux-saga/effects'
import { normalize } from 'normalizr'

import api from './create_api'
import TYPES from '../create_types'
import LocalStorage from '../../../utilities/local-storage/token'

export const name = 'userAuthActions'

export function post(full_name, email, password, phone_number) {
  console.log("HERE I AM")
  return {
    type: TYPES.CREATE_USER__REQUEST,
    full_name,
    email,
    password,
    phone_number
  }
}

export function* executeCreate({ full_name, email, password, phone_number }) {
  const url = api.post.formatUrl()
  const body = api.post.serialize(full_name, email, password, phone_number)
  try {
    const res = yield post(api.fetch.request, url, body)
    const normalizedData = normalize(res.data.user, userSchema)
    LocalStorage.set(res.data)
    yield put(fetchSuccess(normalizedData))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function fetchSuccess() {
  return {
    type: TYPES.CREATE_USER__REQUEST,
    
  }
}

const sagas = [
  takeLatest(TYPES.CREATE_USER__REQUEST, executeCreate)
]

export default sagas