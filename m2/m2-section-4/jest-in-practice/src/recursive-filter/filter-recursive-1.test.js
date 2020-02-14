import { expect } from  'chai'
import recursiveFilter from './filter-recursive-1'

it('recursiveFilter should be a function', () => {
  expect(recursiveFilter).to.be.a('function')
})

it('recursiveFilter([1, 2, 3], (item, index, array) => item > 2) should return [3]', () => {
  expect(recursiveFilter([1, 2, 3], (item, index, array) => item > 2)).to.be.deep.equal([3])
})

it('recursiveFilter([\'spray\', \'limit\', \'elite\', \'exuberant\', \'destruction\', \'present\'], (item, index, array) => item > 2) should return [3]', () => {
  expect(recursiveFilter(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'], (item, index, array) => item.length > 6)).to.be.deep.equal(['exuberant', 'destruction', 'present'])
})

it('recursiveFilter([{ id: 15 },{ id: -1 },{ id: 0 },{ id: 3 },{ id: 12.2 },{ },{ id: null },{ id: NaN },{ id: \'undefined\' }], (item, index, array) => typeof(item.id) === \'number\') should return [3]', () => {
  expect(recursiveFilter([{ id: 15 },{ id: -1 },{ id: undefined },{ id: 'string' },{ id: 12.2 },{ },{ id: null },{ id: NaN },{ id: true }], (item, index, array) => typeof(item.id) === 'number')).to.be.deep.equal([{ id: 15 }, { id: -1 }, { id: 12.2 }, { id: NaN }])
})
