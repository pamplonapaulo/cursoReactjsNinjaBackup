import { expect } from  'chai'
import find from './prof-find-recursive'

it('filter should be a function', () => {
  expect(find).to.be.a('function')
})

it('find([1, 2, 3, 4, 5, 6], (item) => item >= 6) should return 6', () => {
  expect(find([1, 2, 3, 4, 5, 6], (item) => item >= 6)).to.be.equal(6)
})

it('find([1, 2, 3, 4, 5, 6], (item) => item > 2) should return 3', () => {
  expect(find([1, 2, 3, 4, 5, 6], (item) => item > 2)).to.be.equal(3)
})

it('find([1, 2, 3, 4, 5, 6], (item) => item >= 1) should return 1', () => {
  expect(find([1, 2, 3, 4, 5, 6], (item) => item >= 1)).to.be.equal(1)
})

it('find([1, 2, 3, 4, 5, 6], (item) => item >= 61) should return undefined', () => {
  expect(find([1, 2, 3, 4, 5, 6], (item) => item >= 61)).to.be.equal(undefined)
})

it('find([1, 2, 3, 4, 5, 6], (item, index) => item === 1) should return 2', () => {
  expect(find([1, 2, 3, 4, 5, 6], (item, index) => index === 1)).to.be.equal(2)
})

it('find([1, 2, 3, 4, 5, 6], (item, index, array) => array[index] === 3) should return 3', () => {
  expect(find([1, 2, 3, 4, 5, 6], (item, index, array) => array[index] === 3)).to.be.equal(3)
})

it('find([]) should return undefined', () => {
  expect(find([])).to.be.equal(undefined)
})