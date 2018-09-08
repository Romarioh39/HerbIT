import typesCreator from '../../state/types-creator'

let TYPES = typesCreator('users',
  'FETCH_USER_INFO_REQUEST',
  'FETCH_USER_TOKEN_REQUEST',
  'FETCH_USER_TOKEN_SUCCESS',
  'FETCH_USER_BY_JWT',
  'RECOVER_USER_PASSWORD_REQUEST',
  'RECOVER_USER_PASSWORD_SUCCESS'
)

export default TYPES