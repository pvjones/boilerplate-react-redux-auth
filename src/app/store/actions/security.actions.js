import actionDefs from './actionDefs'
import fetch from './fetch.actions'
import { setAlertError } from './appState.actions'

export const setSession = session => ({
  type: actionDefs.Security.Session.Set,
  payload: session,
})

export const clearSession = () => ({
  type: actionDefs.Security.Session.Remove,
})

export const signIn = creds =>
  dispatch => {
    const login = {
      email: creds.get('username'),
      password: creds.get('password'),
    }

    return dispatch(fetch.post('/login', null, login))
      .then(session => dispatch(setSession(session)))
      .catch(error => { throw error })
  }

export const signOut = () =>
  dispatch =>
    dispatch(fetch.post('/logoff'))
      .then(() => {
        dispatch(clearSession())
      })
      .catch(error => {
        dispatch(setAlertError(error.message))
      })


export const setUserDetails = user => ({
  type: actionDefs.Security.Permissions.SetUserDetails,
  payload: user,
})

export const fetchUserById = id =>
  dispatch =>
    dispatch(fetch.get(`/users/${id}`))
      .then(response => {
        dispatch(setUserDetails(response))
      })
