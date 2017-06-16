import { combineReducers } from 'redux'
import { identitiesReducer } from './identities'
import { appReducer } from './app'
import { tracklistReducer } from './tracklist'
import { tracksReducer } from './tracks'

export default combineReducers({
  identities: identitiesReducer,
  tracklist: tracklistReducer,
  tracks: tracksReducer,
  app: appReducer
})
