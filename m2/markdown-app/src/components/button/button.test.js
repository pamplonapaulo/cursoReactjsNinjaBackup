'use strict'

import React from 'react'
import Button from './index'
import renderer from 'react-test-renderer'

it('Should Button Default to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={() => null}>
      Click Me
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button Success to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={() => null} kind='success'>
      Click Me Success
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button Danger to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={() => null} kind='danger'>
      Click Me Danger
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
