import { takeLatest, call, fork } from 'redux-saga/effects'

import { appActions } from './actions'

import { fetchApp } from '@core/api'

export function* initApp() {
  yield call(fetchApp)
}

export function* watchInitApp() {
  yield takeLatest(appActions.INIT_APP, initApp)
}

export const appSagas = [
  fork(watchInitApp)
]
