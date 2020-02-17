'use strict'

// Imperative function:
/*
const some = (arr, func) => {

  for (let i = 0; i < arr.length; i++) {

    if (func(arr[i], i, arr))
      return true
  }
  return false
}
*/

// Recursive function:

const some = (arr = [], func = (item) => item) => {

  return (function everyInternal(arrayInternal, counter) {
    const [head, ...tail] = arrayInternal

    return arrayInternal.length === 0
      ? false
      : func(head, counter, arr)
        ? true
        : everyInternal(tail, counter + 1)
  })(arr, 0)
}

//console.log(every([], (item) => item))
export default some
