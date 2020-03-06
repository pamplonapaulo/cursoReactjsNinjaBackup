import { expect } from  'chai'
import reduceRight from './reduce-recursiveRight'

it('reduceRight should be a function', () => {
  expect(reduceRight).to.be.a('function')
})

it('reduceRight([\'0\', \'1\', \'2\', \'3\', \'4\'], (acc, item) => acc + item) should return 43210', () => {
  expect(reduceRight(['0', '1', '2', '3', '4'], (acc, item) => acc + item)).to.be.deep.equal('43210')
})

it('reduceRight([\'0\', \'1\', \'2\', \'3\', \'4\'], (acc, item) => acc + item, 9) should return 943210', () => {
  expect(reduceRight(['0', '1', '2', '3', '4'], (acc, item) => acc + item, 9)).to.be.deep.equal('943210')
})

it('reduceRight([\'0\', \'1\', \'2\', \'3\', \'4\'], (acc, item) => acc + item, \'9\') should return 943210', () => {
  expect(reduceRight(['0', '1', '2', '3', '4'], (acc, item) => acc + item, '9')).to.be.deep.equal('943210')
})

it('reduceRight([[0, 1], [2, 3], [4, 5]], (acc, item) => acc.concat(item)) should return [ 4, 5, 2, 3, 0, 1 ]', () => {
  expect(reduceRight([[0, 1], [2, 3], [4, 5]], (acc, item) => acc.concat(item))).to.be.deep.equal([ 4, 5, 2, 3, 0, 1 ])
})

it('reduceRight([[0, 1], [2, 3], [4, 5]], (acc, item) => acc.concat(item), [10]) should return [ 4, 5, 2, 3, 0, 1 ]', () => {
  expect(reduceRight([[0, 1], [2, 3], [4, 5]], (acc, item) => acc.concat(item), [10])).to.be.deep.equal([ 10, 4, 5, 2, 3, 0, 1 ])
})

it('reduceRight(["Banana", "Orange", "Lemon", "Apple", "Mango"], (acc, item) => acc.concat(item), ["Lettuce"]) should return [ \'Lettuce\', \'Mango\', \'Apple\', \'Lemon\', \'Orange\', \'Banana\' ]', () => {
  expect(reduceRight(["Banana", "Orange", "Lemon", "Apple", "Mango"], (acc, item) => acc.concat(item), ["Lettuce"])).to.be.deep.equal([ 'Lettuce', 'Mango', 'Apple', 'Lemon', 'Orange', 'Banana' ])
})

it('reduceRight([100, 200, 300, 400], (acc, item, index) => { acc[\'index-\' + index ] = item; return acc }, {}) should return { \'index-3\': 400, \'index-2\': 300, \'index-1\': 200, \'index-0\': 100 }', () => {
  expect(reduceRight([100, 200, 300, 400], (acc, item, index) => { acc['index-' + index ] = item; return acc }, {})).to.be.deep.equal({ 'index-3': 400, 'index-2': 300, 'index-1': 200, 'index-0': 100 })
})

