'use strict'

const recursiveMap = (arr, func, originalArr = [], mapped = []) => {
  if (arr.length === 0)
    return mapped

  if (originalArr.length === 0)
    originalArr = arr

  /*

  Old-Fashion - Paulo version:

      mapped.push(func(arr[0], mapped.length, arr))
      arr = arr.slice(1)
      return recursiveMap(arr, func, mapped)

  */

  // ES6 - Paulo version:
  const [head, ...tail] = arr

  mapped.push(func(head, mapped.length, originalArr, arr ))
  return recursiveMap(tail, func, originalArr, mapped)
}

//console.log(recursiveMap( [1, 2, 3, 4], (item) => item))
//console.log(recursiveMap( [1, 5, 3], (item) => item * 2))
//console.log(recursiveMap( [1, 2, 3], (item, index) => index))
//console.log(recursiveMap( [1, 2, 3, 4], (item, index, array) => array))

export default recursiveMap