import { expect } from  'chai'
import reduce from './reduce-recursive'

it('reverse should be a function', () => {
  expect(reduce).to.be.a('function')
})

it('reduce([0, 1, 2, 3], (acc, item) => acc + item) should return 6', () => {
  expect(reduce([0, 1, 2, 3], (acc, item) => acc + item)).to.be.deep.equal(6)
})

it('reduce([0, 1, 2, 3, 4], (acc, item) => acc * item) should return 0', () => {
  expect(reduce([0, 1, 2, 3, 4], (acc, item) => acc * item)).to.be.deep.equal(0)
})

it('reduce([1, 2, 3, 4], (acc, item) => acc * item) should return 24', () => {
  expect(reduce([1, 2, 3, 4], (acc, item) => acc * item)).to.be.deep.equal(24)
})

it('reduce([1, 2, 3, 4], (acc, item) => acc + item) should return 11', () => {
  expect(reduce([1, 2, 3, 4], (acc, item) => acc + item, 1)).to.be.deep.equal(11)
})

it('reduce([1, 2, 3, 4], (acc, item) => acc + item) should return 20', () => {
  expect(reduce([1, 2, 3, 4], (acc, item) => acc + item, 10)).to.be.deep.equal(20)
})

it('reduce([1, 2], (acc, item, index) => acc + index) should return 1', () => {
  expect(reduce([1, 2], (acc, item, index) => acc + index, 0)).to.be.deep.equal(1)
})

it('reduce([1, 2, 3], (acc, item) => { acc[\'index\' + item ] = item; return acc }, {})) should return { \'index1\': 1, \'index2\': 2, \'index3\': 3 }', () => {
  const before = reduce([1, 2, 3], (acc, item) => {
    acc["index-" + item] = item
    return acc
  }, {})
  const after = {"index-1": 1, "index-2": 2, "index-3": 3}
  expect(before).to.be.deep.equal(after)
})

it('reduce([1, 2], (acc, item, index) => acc + index) should return 1', () => {
  const before = reduce([1, 2], (acc, item, index, array) => acc + array[index], 0)
  const after = 3
  expect(before).to.be.equal(after)
})