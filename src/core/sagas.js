import { all } from 'redux-saga/effects'

import { appSagas } from './app'
import { identitySagas } from './identities'
import { tracklistSagas } from './tracklist'

export default function* sagas() {
  yield all([
    ...appSagas,
    ...tracklistSagas,
    ...identitySagas
  ])
}
