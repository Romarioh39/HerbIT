import TYPES from '../users/create_types'

// dummy_reducer
export const initialState = {
  addingEmail: ''
}

const loadCreatAccount = (state, { email }) => ({
  ...state,
  addingEmail: email
})

const handlers = {
  [TYPES.CREATE_USER_SUCCESS]: loadCreatAccount
}

export default function(state = initialState, action = {}) {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'createaccounts',
  select(state) {
    return state.createaccounts
  }
}