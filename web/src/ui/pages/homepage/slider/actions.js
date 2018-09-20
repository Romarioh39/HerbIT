import { call, put, takeLatest } from 'redux-saga/effects'

import * as api from './api'
import TYPES from './types'

export const name = 'sliderpageActions'

export function fetchSliderImage(amount) {
  return {
    type: TYPES.FETCH_SLIDER_IMAGE_REQUEST
  }
}

export function* executeFetchSliderImage() {
  const url = api.fetch.formatUrl()
  try {
    const res = yield call(api.fetch.request, url)
    yield put(fetchSuccess(res.data.image))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function fetchSuccess({ sliderImage }) {
  return {
    type: TYPES.FETCH_SLIDER_IMAGE_SUCCESS,
    image: sliderImage
  }
}
const sagas = [
  takeLatest(TYPES.FETCH_SLIDER_IMAGE_REQUEST, executeFetchSliderImage)
]

export default sagas
