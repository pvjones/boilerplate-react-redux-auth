import { combineReducers, ReducersMapObject } from 'redux'
import { routerReducer } from 'react-router-redux'
import actionDefs from '../actions/actionDefs'
import securityReducer from './security.reducer'

const appReducer = combineReducers({
  security: securityReducer,
})

export default (state, action) => {
  if (action.type === actionDefs.Security.Session.Clear) state = undefined
  return appReducer(state, action)
}
