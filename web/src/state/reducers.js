import { combineReducers } from 'redux'

import users from '../process/users/reducer'
import animals from '../ui/pages/homepage/dummy_reducer'
import TYPES from './types'
import createaccounts from '../process/users/create_reducer'

const appReducer = combineReducers({
  users,
  animals,
  createaccounts
})

export default (state, action) => {
  if (action.type === TYPES.RESET_ALL_USER_DATA_SUCCESS) {
    state = undefined
  }

  return appReducer(state, action)
}
