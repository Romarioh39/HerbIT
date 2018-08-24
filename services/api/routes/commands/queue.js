import { fetchQueue, fetchInvites, fetchRequests, createRequest, getGame } from '../repositories/queue'
import { NotFoundError } from '../../common/utils/errors'

export async function queue(chatname, userHandle) {
  const chat = await getGame(chatname)

  if (!chat) {
    throw new NotFoundError(`Unknown chat of ${chatname}`)
  }

  let queue = await fetchQueue(chatname)
  let invites = await fetchInvites(userHandle)
  let requests = await fetchRequests(userHandle)

  return { queue, invites, requests }
}

export async function makeRequest(currentUser, targetUser) {
  if(currentUser === targetUser)
    throw new Error('Cannot text yourself')

  await createRequest(currentUser, targetUser)
  let requests = await fetchRequests(currentUser)

  return requests
}

