import { call, put } from 'redux-saga/effects'

import { identityRequestActions } from '@core/identities'
import { appRequestActions } from '@core/app'
import { tracklistRequestActions } from '@core/tracklist'
import { api } from './service'

function* fetchEntities(apiFunction, actions) {
  try {
    yield put(actions.pending())
    const data = yield call(apiFunction)
    yield put(actions.fulfilled(data))
  } catch (error) {
    yield put(actions.failed(error))
  }
}

export const fetchIdentity = fetchEntities.bind(null, api.fetchIdentity, identityRequestActions)
export const fetchApp = fetchEntities.bind(null, api.fetchApp, appRequestActions)
export const fetchTracks = fetchEntities.bind(null, api.fetchTracks, tracklistRequestActions)
