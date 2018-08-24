import TYPES from './types'

export const initialState = {
  queue: [],
  invites: [],
  requests: []
}

const loadQueue = (state, { queue, invites, requests }) => ({
  ...state,
  queue,
  invites,
  requests
})

const handlers = {
  [TYPES.FETCH_CHAT_QUEUE_SUCCESS]: loadQueue
}

export default function(state = initialState, action = {}) {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'chatqueue',
  select(state) {
    return state.chatqueue
  }
}