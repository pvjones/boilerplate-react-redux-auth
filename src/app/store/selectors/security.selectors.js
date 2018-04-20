// import { Map } from 'immutable'
import { SecurityPaths } from '../reducers/paths'
// import { getDispatch } from '../store'

export const selectSessionToken = store => {
  const path = SecurityPaths.session.token.get()
  return store.security.getIn(path, '')
}

export const selectIsUserAuthenticated = store => {
  const token = selectSessionToken(store)
  return token !== ''
}

export const selectUserId = store => {
  const path = SecurityPaths.session.user.id.get()
  return store.security.getIn(path)
}

export const selectUserFullName = store => {
  const firstName = store.security.getIn(SecurityPaths.session.user.firstName.get())
  const lastName = store.security.getIn(SecurityPaths.session.user.lastName.get())
  return `${firstName} ${lastName}`
}

// export const selectDetailsForUser = (store, userId) => {
//   const user = store.security.getIn(paths.userDetails(userId), Map())
//   if (user.size === 0) {
//     getDispatch()(fetchUserById(userId))
//   }
//   return user
// }
