import TYPES from './types'

// dummy_reducer
export const initialState = {
  InfoForChats: []
}

const loadInfoForChats = (state, { InfoForChats }) => ({
  ...state,
  InfoForChats: [{ name: 'Romario'}, { name: 'Tippets'}]
})

const handlers = {
  [TYPES.FETCH_INFO_FOR_CHAT_SUCCESS]: loadInfoForChats
}

export default function(state = initialState, action = {}) {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'chatroom',
  select(state) {
    return state.chatroom
  }
}