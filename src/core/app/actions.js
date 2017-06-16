export const appActions = {
  INIT_FAILED: 'INIT_FAILED',
  INIT_FULFILLED: 'INIT_FULFILLED',
  INIT_PENDING: 'INIT_PENDING',
  
  INIT_APP: 'INIT_APP',

  initFailed: error => ({
    type: appActions.INIT_FAILED,
    payload: error
  }),

  initFulfilled: data => ({
    type: appActions.INIT_FULFILLED,
    payload: data
  }),

  initPending: () => ({
    type: appActions.INIT_PENDING
  }),

  initApp: () => ({
    type: appActions.INIT_APP
  })
}

export const appRequestActions = {
  failed: appActions.initFailed,
  fulfilled: appActions.initFulfilled,
  pending: appActions.initPending
}
