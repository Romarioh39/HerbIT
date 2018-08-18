import sql from 'sql-template-strings'
import PGWrapper from '../../common/utils/pg-wrapper'

export async function fetchQueue(name) {
  const query = sql`
  select users.user_handle, users.username from users
      inner join games_queue on games_queue.user_handle = users.user_handle
      inner join games on games.id = games_queue.game_id
      where game_name = 'chess';`

  const queue = await PGWrapper.sqlAndMap(query, (row) => ({
    userHandle: row.user_handle,
    username: row.username
  }))
  return queue
}

export async function getGame(name) {
  const query = sql`select * from games where game_name = ${name};`
  const game = await PGWrapper.sqlAndMap(query, (row) => ({
    id: row.id,
    gameName: row.game_name,
    maxPlayers: row.max_players
  }))
  return game[0]
}
