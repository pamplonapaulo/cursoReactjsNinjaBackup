'use strict'

/*

  Missing Baby Steps
  
  One:

    const map = () => {
      return [1, 2]
    }

  Two:

    const map = (arr) => {
      return arr
    }

  Three:

    const map = (arr, func) => {
      let newArr = []
      for (let i=0; i<arr.length; i++) {
        newArr.push(func(arr[i]))
      }
      return newArr
    }

  Four:

    const map = (arr, func) => {
      let newArr = []
      for (let i=0; i<arr.length; i++) {
        newArr.push(func(arr[i], i))
      }
      return newArr
    }

  Five:

    const map = (arr, func) => {
      let newArr = []
      for (let i=0; i<arr.length; i++)
        newArr.push(func(arr[i], i))
      return newArr
    }

  Six:

    const map = (arr, func) => {
      let newArr = []
      for (let i=0; i<arr.length; i++)
        newArr.push(func(arr[i], i, arr))
      return newArr
    }

*/

const map = (arr, func) => {
  // if (typeof func !== 'function')
  //   throw new TypeError('func is not a function')

  // if (!Array.isArray(arr))
  //   throw new TypeError('arr is not an array')
    

  let newArr = []

  for (let i = 0; i < arr.length; i++)
    newArr.push(func(arr[i], i, arr))

  return newArr
}

// const map = (array, func) => {
//   return array.map(func)
// }

export default map