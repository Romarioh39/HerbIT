import { combineReducers } from 'redux'

import users from '../process/users/reducer'
import animals from '../ui/pages/homepage/dummy_reducer'
import TYPES from './types'
import createaccount from '../ui/pages/createaccount/reducer'
import chatroom from '../ui/pages/chatroom/reducer'
import mypage from '../ui/pages/myfriendspage/reducer'

const appReducer = combineReducers({
  users,
  animals,
  createaccount,
  chatroom,
  mypage
})

export default (state, action) => {
  if (action.type === TYPES.RESET_ALL_USER_DATA_SUCCESS) {
    state = undefined
  }

  return appReducer(state, action)
}
