import { expect } from  'chai'
import every from './every-recursive'

it('every should be a function', () => {
  expect(every).to.be.a('function')
})

it('every([], (item) => item) should return true', () => {
  expect(every([], (item) => item)).to.be.ok
})

it('every([0, 1, 2], (item) => item) should return false', () => {
  expect(every([0, 1, 2], (item) => item)).to.not.be.ok
})

it('every([3, 1, 2], (item) => item) should return true', () => {
  expect(every([3, 1, 2], (item) => item)).to.be.ok
})

it('every([1, 2, 3], (item, index) => item - 1 == index) should return true', () => {
  expect(every([1, 2, 3], (item, index) => item - 1 == index)).to.be.ok
})

it('every([1, 2, 3], (item, index) => item - 2 == index) should return false', () => {
  expect(every([1, 2, 3], (item, index) => item - 2 == index)).to.not.be.ok
})

it('every([1, 2, 3], (item, index, array) => array.length == 3) should return true', () => {
  expect(every([1, 2, 3], (item, index, array) => array.length == 3)).to.be.ok
})

it('every([11, 21, 31], (item) => item > 10) should return true', () => {
  expect(every([11, 2, 31], (item) => item > 10)).to.be.deep.equal(false)
})

/*
it('every([], (item) => item > 2) should return []', () => {
  expect(every([], (item) => item > 2)).to.be.deep.equal([])
})

it('every([0, 1, 2], (item) => item) should return [1, 2]', () => {
  expect(every([0, 1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

it('every([1, 2, 3], (item) => item < 2)', () => {
  expect(every([1, 2, 3], (item) => item < 2)).to.be.deep.equal([1])
})

it('every([1, 2, 3], (item) => item > 2) should return [3]', () => {
  expect(every([1, 2, 3], (item) => item > 2)).to.be.deep.equal([3])
})

it('every([1, 2, 3], (item) => item > 1) should return [2, 3]', () => {
  expect(every([1, 2, 3], (item) => item > 1)).to.be.deep.equal([2, 3])
})

it('every([0, 1, 2, 3, 4, 5, 6, 7], (item) => item > 3) should return [4, 5, 6, 7]', () => {
  expect(every([0, 1, 2, 3, 4, 5, 6, 7], (item) => item > 3)).to.be.deep.equal([4, 5, 6, 7])
})

it('every([1, 2, 3, 5], (item, index) => item === index + 1) should return [1, 2, 3]', () => {
  expect(every([1, 2, 3, 5], (item, index) => item === index + 1)).to.be.deep.equal([1, 2, 3])
})

it('every([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item)) should return [1, 2, 3, 5]', () => {
  expect(every([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item))).to.be.deep.equal([1, 2, 3, 5])
})
*/

