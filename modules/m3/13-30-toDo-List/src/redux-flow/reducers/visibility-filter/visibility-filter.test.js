'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import visibilityFilter, { initialState } from './index.js'
import {
  SET_VISIBILITY_FILTER,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from './actions'

it('VisibilityFilter should be a function', () => {
  expect(visibilityFilter).to.be.a('function')
})

it('Should show all todos', () => {
  const before = SHOW_COMPLETED
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_ALL}
  })
  const after = SHOW_ALL
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('Should show just completed todos', () => {
  const before = SHOW_ALL
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_COMPLETED}
  })
  const after = SHOW_COMPLETED
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('Should show just active todos', () => {
  const before = SHOW_ALL
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_ACTIVE}
  })
  const after = SHOW_ACTIVE
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('Should return latest state when action is unknown', () => {
  const before = SHOW_COMPLETED
  const action = deepFreeze({
    type: 'UNKNOWN',
    payload: { filter: SHOW_ALL}
  })
  const after = SHOW_COMPLETED
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('Should return initialState when latest state is undefined', () => {
  const before = undefined
  const action = deepFreeze({})
  const after = initialState
  expect(visibilityFilter(before, action)).to.be.equal(after)
})