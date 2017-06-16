import { API_BASE_URL } from '@core/constants'

export const api = {
  fetchApp() {
    return dispatch(`${API_BASE_URL}/me`)
  },

  fetchIdentity(id) {
    return dispatch(`${API_BASE_URL}/identities/${id}`)
  },

  fetchTracks() {
    return dispatch(`${API_BASE_URL}/tracks`)
  }
}

export function dispatch(url) {
  return fetch(url).then(response => response.json())
}
