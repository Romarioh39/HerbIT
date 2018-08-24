import TYPES from './types'

// dummy_reducer
export const initialState = {
  users: []
}

const loadusers = (state, { users }) => ({
  ...state,
  users: [{ name: 'Bryce'}, { name: 'john'}]
})

const handlers = {
  [TYPES.FETCH_USERS_SUCCESS]: loadusers
}

export default function(state = initialState, action = {}) {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'mypage',
  select(state) {
    return state.mypage
  }
}