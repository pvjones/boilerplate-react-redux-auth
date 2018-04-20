import React from 'react'
import { connect } from 'react-redux'
import { selectIsUserAuthenticated } from '../../store/selectors/security.selectors'
import { Route, Redirect, withRouter } from 'react-router-dom'

const AuthenticatedRoute = ({
  redirectIfAuthenticated,
  isAuthenticated,
  component,
  render,
  redirectPath = '/login',
  location,
  ...other
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
    const shouldRedirect = redirectIfAuthenticated ? isAuthenticated : !isAuthenticated
    if (shouldRedirect) {
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

