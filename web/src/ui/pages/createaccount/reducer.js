import TYPES from './types'

// dummy_reducer
export const initialState = {
  accounts: ''
}

const loadCreateAccount = (state, { email }) => ({
  ...state,
  accounts:  [{ email: 'Bryce@gmail.com'}, { email: 'romario@gmail.com'}]
})

const handlers = {
  [TYPES.CREATE_USER_SUCCESS]: loadCreateAccount
}

export default function(state = initialState, action = {}) {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'createaccount',
  select(state) {
    return state.createaccount
  }
}