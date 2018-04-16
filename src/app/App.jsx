import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { composeStore } from './store/store'
import Main from './components/Main'

injectTapEventPlugin()

const history = createHistory()
const historyMiddleware = routerMiddleware(history)

// Init store
const store = composeStore(historyMiddleware)

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path='/' component={Component} />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app'),
  )
}

render(Main)
