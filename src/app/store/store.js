import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducers from './reducers/reducers'

let store
let dispatch

export const getDispatch = () => dispatch

export const composeStore = historyMiddleware => {
  store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk, historyMiddleware),
  ))

  dispatch = store.dispatch

  return store
}

// setMockDispatch
export const setDispatch = d => { dispatch = d }
