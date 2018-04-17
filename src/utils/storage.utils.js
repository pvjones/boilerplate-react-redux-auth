// todo: Serialize is deleting and overwriting the branch in the store
// anytime something is serialized
const serializeState = (storageType, state, storageLocation, dataPath) => {
  if (!dataPath) {
    storageType[storageLocation] = JSON.stringify(state)
    return state
  }
  storageType[storageLocation] = JSON.stringify(state.getIn(dataPath))
  return state
}

export const serializeStateToSessionStorage = (state, storageLocation, dataPath) =>
  serializeState(sessionStorage, state, storageLocation, dataPath)


export const serializeStateToLocalStorage = (state, storageLocation, dataPath) =>
  serializeState(localStorage, state, storageLocation, dataPath)


const deserializeState = (storageType, state, storageLocation, dataPath) => {
  try {
    if (storageType[storageLocation]) {
      if (!dataPath) {
        return state.merge(JSON.parse(storageType[storageLocation]))
      }
      return state.mergeIn(dataPath, JSON.parse(storageType[storageLocation]))
    }
  } catch (error) {
    return state
  }
  return state
}

export const deserializeStateFromSessionStorage = (state, storageLocation, dataPath) => (
  deserializeState(sessionStorage, state, storageLocation, dataPath)
)

export const deserializeStateFromLocalStorage = (state, storageLocation, dataPath) => (
  deserializeState(localStorage, state, storageLocation, dataPath)
)
