import React from 'react'
import { Switch } from 'react-router-dom'
import AuthenticatedRoute from './Route/AuthenticatedRoute'
import Login from './Views/Login'
import Register from './Views/Register'

const PrimaryRoute = () => (
  <Switch>
    <AuthenticatedRoute
      path='/login'
      render={() => <Login />}
      redirectPath='/'
      ifNotAuthenticated
    />
    <AuthenticatedRoute
      path='/register'
      render={() => <Register />}
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

export default PrimaryRoute
