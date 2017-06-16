import { createSelector } from 'reselect'

export function getIdentity(state) {
  return state.app.toJS().identity
}
