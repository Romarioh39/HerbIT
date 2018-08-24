import sql from 'sql-template-strings'
import PGWrapper from '../../common/utils/pg-wrapper'

export async function fetchQueue(name) {
  const query = sql`
  select users.user_handle, users.username from users
      inner join chat_queue on chat_queue.user_handle = users.user_handle
      inner join chat on chat.id = chat_queue.queue_id
      where room_id = ${name};`

  const queue = await PGWrapper.sqlAndMap(query, (row) => ({
    userHandle: row.user_handle,
    username: row.username
  }))
  return queue
}

export async function fetchInvites(userHandle) {
  const query = sql`
    select users.user_handle, users.username from users
      inner join chat_invites on chat_invites.invited = users.user_handle
      where invited = ${userHandle};`

  const invites = await PGWrapper.sqlAndMap(query, (row) => ({
    id: row.id,
    inviter: row.user_handle,
    invited: row.username,
    accepted: row.accepted
  }))

  return invites
}

export async function fetchRequests(userHandle) {
  const query = sql`
  select users.user_handle, users.username, chat_invites.accepted from users
    inner join chat_invites on chat_invites.inviter = users.user_handle
    where inviter = ${userHandle};`

  const request = await PGWrapper.sqlAndMap(query, (row) => ({
    invited: row.user_handle,
    username: row.username,
    accepted: row.accepted
  }))

  return request
}

export async function createRequest(currentUser, targetUser) {
  const query = sql`insert into chat_invites (inviter, invited)
      values (${currentUser}, ${targetUser})
      returning id, inviter, invited, accepted;`

  const newRow = await PGWrapper.sqlAndMap(query, (row) => ({
    id: row.id,
    inviter: row.user_handle,
    invited: row.username,
    accepted: row.accepted
  }))

  return newRow[0]
}

export async function getChat(name) {
  const query = sql`select * from chat where room_id = ${name};`
  const game = await PGWrapper.sqlAndMap(query, (row) => ({
    id: row.id,
    chatName: row.room_id
  }))
  return game[0]
}

