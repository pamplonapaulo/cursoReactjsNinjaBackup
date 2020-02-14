import { expect } from  'chai'
import filter from './filter-recursive-2'

it('filter should be a function', () => {
  expect(filter).to.be.a('function')
})

it('filter([], (item) => item > 2) should return []', () => {
  expect(filter([], (item) => item > 2)).to.be.deep.equal([])
})

it('filter([11, 21, 31], (item) => item) should return [11, 21, 31]', () => {
  expect(filter([11, 21, 31], (item) => item)).to.be.deep.equal([11, 21, 31])
})

it('filter([0, 1, 2], (item) => item) should return [1, 2]', () => {
  expect(filter([0, 1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

it('filter([1, 2, 3], (item) => item < 2)', () => {
  expect(filter([1, 2, 3], (item) => item < 2)).to.be.deep.equal([1])
})

it('filter([1, 2, 3], (item) => item > 2) should return [3]', () => {
  expect(filter([1, 2, 3], (item) => item > 2)).to.be.deep.equal([3])
})

it('filter([1, 2, 3], (item) => item > 1) should return [2, 3]', () => {
  expect(filter([1, 2, 3], (item) => item > 1)).to.be.deep.equal([2, 3])
})

it('filter([0, 1, 2, 3, 4, 5, 6, 7], (item) => item > 3) should return [4, 5, 6, 7]', () => {
  expect(filter([0, 1, 2, 3, 4, 5, 6, 7], (item) => item > 3)).to.be.deep.equal([4, 5, 6, 7])
})

it('filter([1, 2, 3, 5], (item, index) => item === index + 1) should return [1, 2, 3]', () => {
  expect(filter([1, 2, 3, 5], (item, index) => item === index + 1)).to.be.deep.equal([1, 2, 3])
})

it('filter([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item)) should return [1, 2, 3, 5]', () => {
  expect(filter([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item))).to.be.deep.equal([1, 2, 3, 5])
})

/*

it('recursiveFilter([\'spray\', \'limit\', \'elite\', \'exuberant\', \'destruction\', \'present\'], (item, index, array) => item > 2) should return [3]', () => {
  expect(filterRecursive2(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'], (item, index, array) => item.length > 6)).to.be.deep.equal(['exuberant', 'destruction', 'present'])
})

it('recursiveFilter([{ id: 15 },{ id: -1 },{ id: 0 },{ id: 3 },{ id: 12.2 },{ },{ id: null },{ id: NaN },{ id: \'undefined\' }], (item, index, array) => typeof(item.id) === \'number\') should return [3]', () => {
  expect(filterRecursive2([{ id: 15 },{ id: -1 },{ id: undefined },{ id: 'string' },{ id: 12.2 },{ },{ id: null },{ id: NaN },{ id: true }], (item, index, array) => typeof(item.id) === 'number')).to.be.deep.equal([{ id: 15 }, { id: -1 }, { id: 12.2 }, { id: NaN }])
})

*/

