import sql from 'sql-template-strings'
import PGWrapper from '../../common/utils/pg-wrapper'

export async function fetchImage(id) {
  const query = sql`select * from slider_images where id = ${id};`

  const image = await PGWrapper.sqlAndMap(query, (row) => ({
    id: row.id,
    sliderImage: row.slider_image
  }))

  return image[0]
}
