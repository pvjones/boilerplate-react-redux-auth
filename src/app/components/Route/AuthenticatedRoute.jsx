import React from 'react'
import { connect } from 'react-redux'
import { selectIsUserAuthenticated } from '../../store/selectors/security.selectors'
import { Route, Redirect, withRouter } from 'react-router-dom'

const AuthenticatedRoute = ({
  ifNotAuthenticated,
  isAuthenticated,
  component,
  render,
  redirectPath = '/login',
  location,
  ...other,
}) => {
  const redirect = from => (
    <Redirect
      to={{
        pathname: redirectPath,
        state: { from },
      }}
    />
  )

  const getRenderFunc = () => {
    if (ifNotAuthenticated ? !isAuthenticated : isAuthenticated) {
      return () => redirect(location.pathname)
    }
    if (component) {
      return routeProps => React.createElement(component, routeProps)
    }
    return render
  }

  return (
    <Route
      {...other}
      render={getRenderFunc()}
    />
  )
}

const mapStoreToProps = store => ({
  isAuthenticated: selectIsUserAuthenticated(store),
})


export default withRouter(
  connect(mapStoreToProps)(
    AuthenticatedRoute,
  ),
)

