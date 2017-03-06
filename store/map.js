import { regionFrom } from '../utils/geo'

/**
 * Changes state `mapRegionCurrent` to new passed-in location
 * @param {*} region 
 */
const mapRegionChange = (region) => {
  return ({ mapRegionCurrent }) => {
    return { mapRegionCurrent: region }
  }
}


/**
 * Set `mapRegionCurrent` to current user location
 */
const mapRegionHere = async ({ mapRegionCurrent }) => {
  const geo = navigator.geolocation
  return await new Promise(
    (resolve, reject) => {
      geo.getCurrentPosition(
        (position) => {
          const coords = position.coords
          const region = regionFrom(coords.latitude, coords.longitude, coords.accuracy)
          resolve({mapRegionCurrent: region})
        }
      )
    }
  )
}


export { mapRegionChange, mapRegionHere }