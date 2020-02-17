'use strict'

// Imperative function:
/*
const reverse = (arr) => {
  let reversed = []

  for (let i = arr.length; i > 0; i--) {
    reversed.push(arr[i-1])
  }
  return reversed
}
*/

// Recursive function:

const reverse = (arr = []) => {
  return (function reverseInternal(arrayInternal, revArr = []) {

    return arrayInternal.length !== 0
      ? (revArr.push(arrayInternal.pop()), reverseInternal(arrayInternal, revArr))
      : revArr

  })(arr)
}

//console.log(reverse([]))
//console.log(reverse([0, 1, 2, 3, 4, 5, 6, 7]))
export default reverse
