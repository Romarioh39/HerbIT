import TYPES from './types'

export const initialState = {
  slidingImages: '',
}

const loadSliderImages = (state, { image }) => ({
  ...state,
  slidingImages: image
})

const handlers = {
  [TYPES.FETCH_SLIDER_IMAGES_SUCCESS]: loadSliderImages
}

export default function(state = initialState, action = {}) {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'sliderpage',
  select(state) {
    return state.sliderpage
  }
}
