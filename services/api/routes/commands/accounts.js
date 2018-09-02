import bcrypt from 'bcrypt'
import { createUser, createPassHash } from '../repositories/accounts'


export async function createAccount(email, password) {
  if(!email || !password)
    throw new Error('Cannot text yourself')

  const user = await createUser(email)
  console.log('we created user', user)
  const passhash = await bcrypt.hash(password, 4)
  console.log('we have created passhast', passhash)
  return createPassHash (user, passhash)
}
