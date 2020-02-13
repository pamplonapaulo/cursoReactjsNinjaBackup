import { expect } from  'chai'
import profMapRecursive from './prof-map-recursive'

it('recursiveMap should be a function', () => {
  expect(profMapRecursive).to.be.a('function')
})

it('recursiveMap([1, 2], (item) => item) should return [1, 2]', () => {
  expect(profMapRecursive([1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

it('recursiveMap([3, 4], (item) => item) should return [3, 4]', () => {
  expect(profMapRecursive([3, 4], (item) => item)).to.be.deep.equal([3, 4])
})

it('recursiveMap([1, 2], (item) => item + 1) should return [2, 3]', () => {
  expect(profMapRecursive([1, 2], (item) => item + 1)).to.be.deep.equal([2, 3])
})

it('recursiveMap([4, 6], (item) => item + 1) should return [5, 7]', () => {
  expect(profMapRecursive([4, 6], (item) => item + 1)).to.be.deep.equal([5, 7])
})

it('recursiveMap([1, 2], (item, index) => index) should return [0, 1]', () => {
  expect(profMapRecursive([1, 2], (item, index) => index)).to.be.deep.equal([0, 1])
})

it('recursiveMap([1, 2], (item, index, array) => array) should return [[1, 2], [1, 2]]', () => {
  expect(profMapRecursive([1, 2], (item, index, array) => array)).to.be.deep.equal([[1, 2], [1, 2]])
})

it('recursiveMap() should return []', () => {
  expect(profMapRecursive()).to.be.deep.equal([])
})

it('recursiveMap([1, 2]) should return [1, 2]', () => {
  expect(profMapRecursive([1, 2])).to.be.deep.equal([1, 2])
})

