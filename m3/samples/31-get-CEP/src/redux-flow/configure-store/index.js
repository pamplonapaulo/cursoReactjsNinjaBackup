'use strict'

import { createStore, applyMiddleware } from 'redux'
import reducer from 'reducers'

export default () => {
  const store = createStore(reducer, applyMiddleware(logger, thunk))

  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextReducers = require('reducers').default
      store.replaceReducer(nextReducers)
    })
  }

  return store
}

const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.log('LOGGER::will dispatch: ', action)
  const nextAction = next(action)
  console.log('LOGGER::next action: ', nextAction)
  return nextAction
}

const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }
  return next(action)
}
