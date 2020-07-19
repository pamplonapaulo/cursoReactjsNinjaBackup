'use strict'

/* Imperative (my own & not so good version):

const reduce = (arr, func, acc) => {

  acc = acc === undefined ? 0 : acc

  for (let i = 0; i < arr.length; i++)
    acc = func(acc, arr[i])    

  return acc
}
*/

const reduce = (arr, func, initialValue) => {

  let acc = initialValue
  let arrCopy = arr

  if (initialValue === undefined) {
    acc = arr[0]
    arrCopy = arr.slice(1)
  }

  return (function reduceInternal(internalArr, counter) {

    return internalArr.length === 0
      ? acc
      : (acc = func(acc, internalArr[0], counter, arrCopy), reduceInternal(internalArr.slice(1), counter + 1))

  })(arrCopy, 0)
}

//console.log([1, 2, 3, 4].reduce((acc, item) => acc + item))
//console.log([1, 2, 3].reduce((acc, item) => acc + item))
//console.log(reduce([1, 2, 3], (acc, item) => acc + item, 2))
//console.log(reduce([0, 1, 2, 3, 4], (acc, item) => acc + item))
//console.log(reduce([0, 1, 2, 3, 4], (acc, item) => acc + item, 2))
//console.log(reduce([1, 2, 33, 3], (acc, item, index) => { acc['index-' + index ] = item; return acc }, {}))

//console.log(reduce([1, 2], (acc, item, index) => acc + index, 0))


export default reduce