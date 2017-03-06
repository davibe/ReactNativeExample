import {createStore} from 'refnux'
import { mapRegionChange, mapRegionHere } from '../store/map'

const stateInitial = {
  appName: 'Scenetic',
  navigator: null,
  counter: 0,
  mapRegionCurrent: null
}

let storeMemoized = null

const storeGetInitialized = () => {
  const store = createStore(stateInitial)
  store.dispatch(mapRegionHere)
  return store
}


const storeGet = () => {
  if (!storeMemoized) {
    storeMemoized = storeGetInitialized()
  }
  return storeMemoized
}

export default storeGet
