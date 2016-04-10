import { toggleLogin } from './navigation'

export function userLogin(state, userData) {
  const setUser = state.set('user', userData.uid)
  const clearError = setUser.setIn(['navigation', 'login', 'status', 'event'], undefined)
  const clearMessage = clearError.setIn(['navigation', 'login', 'status', 'message'], undefined)
  return toggleLogin(clearMessage)
}

export function userLogout(state) {
  const removeUser = state.set('user', undefined)
  const removeProjects = removeUser.set('projects', undefined)
  return removeProjects
}

export function loginFailure(state) {
  const setError = state.setIn(['navigation', 'login', 'status', 'event'], 'error')
  const setMessage = setError.setIn(['navigation', 'login', 'status', 'message'], 'invalid login')
  return setMessage
}
