'use strict'

// setup file (yup, lazy I am.)
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({ adapter: new Adapter() });


import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount, render } from 'enzyme';
import Button from './index'

const noop = () => null

it('Should Button Default to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={noop}>
      Click Me
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button Success to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={noop} kind='success'>
      Click Me Success
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button Danger to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={noop} kind='danger'>
      Click Me Danger
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button with prop kind="success" should has class "-success"', () => {
  const wrapper = shallow(
    <Button onClick={noop} kind='success'>
      Button Success
    </Button>
  )
  expect(wrapper.hasClass('-success')).toBe(true)
  expect(wrapper.hasClass('-danger')).toBe(false)
})

it('Should Button with prop kind="danger" should has class "-danger"', () => {
  const wrapper = shallow(
    <Button onClick={noop} kind='danger'>
      Button Danger
    </Button>
  )
  expect(wrapper.hasClass('-danger')).toBe(true)
  expect(wrapper.hasClass('-success')).toBe(false)
})
