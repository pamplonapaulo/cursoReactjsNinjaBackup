'use strict'

// Imperative (my own & not so good version):
/*
const reduceRight = (arr, func, acc) => {

  if (acc === undefined) {
    acc = arr[arr.length - 1]
    arr = arr.slice(0, arr.length - 1)
  }

  for (let i = arr.length - 1; i >= 0; i--)
    acc = func(acc, arr[i], i, arr)    

  return acc
}
*/

// Refactoring (no mutability):
const isInitialValueUndefined = (initialValue) => initialValue === undefined

const reduceRight = (arr, func, initialValue) => {

  const acc = isInitialValueUndefined(initialValue) ? arr[arr.length - 1] : initialValue
  const arrCopy = isInitialValueUndefined(initialValue) ? arr.slice(0, arr.length - 1) : arr

  return (function reduceRightInternal(accInternal, arrInternal, counter) {

    const accPrev = () => func(accInternal, arrInternal[counter], counter, arrCopy)

    return arrInternal.length === 0
      ? accInternal
      : reduceRightInternal(accPrev(), arrInternal.slice(0, arrInternal.length - 1), counter - 1)

  })(acc, arrCopy, arrCopy.length - 1)
}

//console.log(reduceRight(['0', '1', '2', '3', '4'], (acc, item) => acc + item))
//console.log(reduceRight(['0', '1', '2', '3', '4'], (acc, item) => acc + item, 9))
// console.log(reduceRight(['0', '1', '2', '3', '4'], (acc, item) => acc + item, '9'))
// console.log(reduceRight([[0, 1], [2, 3], [4, 5]], (acc, item) => acc.concat(item)))
// console.log(reduceRight([[0, 1], [2, 3], [4, 5]], (acc, item) => acc.concat(item), [10]))
// console.log(reduceRight(["Banana", "Orange", "Lemon", "Apple", "Mango"], (acc, item) => acc.concat(item), ["Lettuce"]))
// console.log(reduceRight([100, 200, 300, 400], (acc, item, index) => { acc['index-' + index ] = item; return acc }, {}))

export default reduceRight