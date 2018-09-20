import { fetchImage } from '../repositories/slider'

export async function randomSliderImage() {
  const randomNumber = 1 + Math.floor(Math.random() * Math.floor(7))
  return fetchImage(randomNumber)
}

