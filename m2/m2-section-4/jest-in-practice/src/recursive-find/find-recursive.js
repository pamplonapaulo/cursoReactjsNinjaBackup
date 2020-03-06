'use strict'

// OBS: find method is a ES6 feature.

// Imperative:
/*
const find = (arr, func) => {

  for (let i = 0; i < arr.length; i++) {

    if (func(arr[i])) {
      return arr[i]
    }
  }
}
*/

// OBS: I just forgot to include tests passing parameters such as index and array

// recursive:

const find = (arr, func) => {

  return (function findInternal(counter){

    return arr.length === counter
      ? undefined
      : func(arr[counter], counter, arr)
        ? arr[counter]
        : findInternal(counter + 1)

  })(0)
}

export default find