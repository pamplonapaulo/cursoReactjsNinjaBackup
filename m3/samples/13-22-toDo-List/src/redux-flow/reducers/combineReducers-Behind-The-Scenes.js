'use strict'

// import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibility-filter'

/* This is what happens behind the scenes:

const combineReducers = (reducers) => (state = {}, action) => {
  return Object.keys(reducers).reduce((nextState, key) => {
    nextState[key] = reducers[key](state[key], action)
    return nextState
  }, {})
}

*/
// or with imutability of the {} that reduce returns:
const combineReducers = (reducers) => (state = {}, action) => {
  return Object.keys(reducers).reduce((nextState, key) => {
    return {
      ...nextState,
      [key]: reducers[key](state[key], action)
    }
  }, {})
}

/*
[ 'todos', 'visibilityFilter' ]

{
  todos: reducerTodos(state.todos, action),
  visibilityFilter: reducerVisibilityFilter(state.visibilityFilter, action)
}
*/
export default combineReducers({
  todos,
  visibilityFilter
})
