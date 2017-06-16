import { Map } from 'immutable'

import { appActions } from './actions'

export const initialState = new Map({
  identity: null
})

export function appReducer(state = initialState, {payload, type}) {
  switch (type) {
    case appActions.INIT_FULFILLED:
      return state.set('identity', payload.id)

    default:
      return state
  }
}
