'use strict'

// Imperative function:
/*
const every = (arr, func) => {

  for (let i = 0; i < arr.length; i++) {

    if (!func(arr[i], i, arr))
      return false
  }
  return true
}
*/

// Recursive function:

const every = (arr = [], func = (item) => item) => {

  return (function everyInternal(arrayInternal, counter) {
    const [head, ...tail] = arrayInternal

    return arrayInternal.length === 0
      ? true
      : !func(head, counter, arr)
        ? false
        : everyInternal(tail, counter + 1)
  })(arr, 0)
}

//console.log(every([], (item) => item))
export default every
