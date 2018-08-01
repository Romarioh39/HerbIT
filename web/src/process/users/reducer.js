import TYPES from './types'
// import merge from 'lodash/merge'

export const initialState = {
  active: null,
  entities: {}
}

const loginUser = (state, { users, id }) => {
  // TODO Challenge 4 complete the reducer based on the data you pass back from your action
  return state
}

const handlers = {
  [TYPES.FETCH_USER_TOKEN_SUCCESS]: loginUser
}

export default function(state = {}, action = {}) {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'UserState',
  select(state) {
    return state.users
  }
}
