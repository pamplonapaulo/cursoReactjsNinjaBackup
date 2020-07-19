import { expect } from  'chai'
import recursiveMapFixed from './redoing-map-recursive'

it('recursiveMapFixed should be a function', () => {
  expect(recursiveMapFixed).to.be.a('function')
})

it('recursiveMapFixed([1, 2], (item) => item) should return [1, 2]', () => {
  expect(recursiveMapFixed([1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

it('recursiveMapFixed([3, 4], (item) => item) should return [3, 4]', () => {
  expect(recursiveMapFixed([3, 4], (item) => item)).to.be.deep.equal([3, 4])
})

it('recursiveMapFixed([1, 2], (item) => item + 1) should return [2, 3]', () => {
  expect(recursiveMapFixed([1, 2], (item) => item + 1)).to.be.deep.equal([2, 3])
})

it('recursiveMapFixed([4, 6], (item) => item + 1) should return [5, 7]', () => {
  expect(recursiveMapFixed([4, 6], (item) => item + 1)).to.be.deep.equal([5, 7])
})

it('recursiveMapFixed([1, 2], (item, index) => index) should return [0, 1]', () => {
  expect(recursiveMapFixed([1, 2], (item, index) => index)).to.be.deep.equal([0, 1])
})

it('recursiveMapFixed([1, 2], (item, index, array) => array) should return [[1, 2], [1, 2]]', () => {
  expect(recursiveMapFixed([1, 2], (item, index, array) => array)).to.be.deep.equal([[1, 2], [1, 2]])
})

it('recursiveMapFixed() should return []', () => {
  expect(recursiveMapFixed()).to.be.deep.equal([])
})

it('recursiveMapFixed([1, 2]) should return [1, 2]', () => {
  expect(recursiveMapFixed([1, 2])).to.be.deep.equal([1, 2])
})

