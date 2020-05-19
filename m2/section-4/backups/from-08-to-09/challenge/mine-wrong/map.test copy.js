import { expect } from  'chai'
import map from './map'

it('map should be a function', () => {
  expect(map).to.be.a('function')
})

it('map([1, 2, 3]) should return [ { item: 1, index: 0, array: [1, 2, 3] }, { item: 2, index: 1, array: [1, 2, 3] }, { item: 3, index: 2, array: [1, 2, 3] } ]', () => {
  expect(map([1, 2, 3])).to.be.equal([ { item: 1, index: 0, array: [1, 2, 3] }, { item: 2, index: 1, array: [1, 2, 3] }, { item: 3, index: 2, array: [1, 2, 3] } ])
})