import React from 'react'
import { Switch } from 'react-router-dom'
import AuthenticatedRoute from './Route/AuthenticatedRoute'


const Main = () => (
  <Switch>
    <AuthenticatedRoute
      path='/login'
      render={() => (
        <div>Login</div>
      )}
      redirectPath='/'
      ifNotAuthenticated
    />
    <AuthenticatedRoute
      path='/'
      render={() => (
        <div>Hello World</div>
      )}
    />
  </Switch>
)

export default Main
