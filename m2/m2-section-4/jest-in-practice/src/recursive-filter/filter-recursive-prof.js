'use strict'

// Imperative function:
/*
const filter = (arr, func) => {
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
*/

// Recursive function:
const filter = (arr = [], func = (item) => item) => {

  return (function filterInternal(arrayInternal, counter, finalArray) {
    const [head, ...tail] = arrayInternal

    return arrayInternal.length === 0
      ? []
      : (func(head, counter, arr) ? [head] : []).concat(filterInternal(tail, counter + 1))
  })(arr, 0, [])
}


export default filter
