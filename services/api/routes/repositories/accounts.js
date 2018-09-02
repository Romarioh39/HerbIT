import sql from 'sql-template-strings'
import PGWrapper from '../../common/utils/pg-wrapper'

export async function createUser(email) {
  console.log('in the repo', email)
  const query = sql`insert into users (email) values (${email})
    returning user_handle;`

  const user = await PGWrapper.sqlAndMap(query, (row) => ({
    userHandle: row.user_handle
  }))
  console.log("HERE -------", user)
  return user[0]
}

export async function createPassHash(user, passhash) {
  const query = sql`insert into passhash (user_handle, passhash) values (${user}, ${passhash}) returning user_handle;`

  const data = await PGWrapper.sqlAndMap(query, (row) => ({
    userHandle: row.user_handle
  }))

  return data[0]
}