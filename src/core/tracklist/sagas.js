import { call, fork, select, takeLatest } from 'redux-saga/effects'

import { fetchTracks } from '@core/api'
import { tracklistActions } from './actions'
import { getTracklist } from './selectors'

export function* loadTracks() {
  const tracklist = yield select(getTracklist)

  if (!tracklist.isLoaded)
    yield call(fetchTracks)
}

export function* watchLoadTracks() {
  yield takeLatest(tracklistActions.LOAD_TRACKS, loadTracks)
}

export const tracklistSagas = [
  fork(watchLoadTracks)
] 
