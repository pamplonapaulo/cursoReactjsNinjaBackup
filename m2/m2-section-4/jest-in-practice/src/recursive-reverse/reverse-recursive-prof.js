'use strict'

// Imperative function:
/*
const reverse = (arr) => {
  let reversed = []

  for (let i = arr.length; i--;)
    reversed.push(arr[i])

  return reversed
}
*/

// Recursive function:

/* PAULO's version:

const reverse = (arr = []) => {
  return (function reverseInternal(arrayInternal, revArr = []) {

    return arrayInternal.length !== 0
      ? (revArr.push(arrayInternal.pop()), reverseInternal(arrayInternal, revArr))
      : revArr

  })(arr)
}*/

/* PROF before refactoring:
const reverse = (arr) => {

  if (arr.length === 0) {
    return []
  }
  return [arr[arr.length - 1]].concat(reverse(arr.slice(0, -1)))
}
*/

/* PROF after refactoring:
const reverse = (arr) => {
  return arr.length === 0 ? [] : [
    arr.slice(-1)[0]
  ].concat(reverse(arr.slice(0, -1)))
}
*/

// And applying the destructuring with spread operator, it gets like that:
const reverse = (arr) => {
  return arr.length === 0 ? [] : [
    arr.slice(-1)[0],
    ...reverse(arr.slice(0, -1))
  ]
}

export default reverse
