'use strict'

const reduce = (arr, func, initialValue) => {

  let acc = initialValue
  let arrCopy = arr

  if (initialValue === undefined) {
    acc = arr[0]
    arrCopy = arr.slice(1)
  }

  for (let i = 0; i < arrCopy.length; i++)
    acc = func(acc, arrCopy[i], i, arrCopy)    

  return acc
}

//console.log([1, 2, 3, 4].reduce((acc, item) => acc + item))
//console.log(reduce([1, 2, 3], (acc, item) => acc + item))
//console.log([1, 2, 3].reduce((acc, item) => acc + item))

//console.log(reduce([1, 2, 3], (acc, item) => acc + item))
//console.log(reduce([0, 1, 2, 3, 4], (acc, item) => acc + item))
//console.log(reduce([0, 1, 2, 3, 4], (acc, item) => acc + item, 2))

//console.log(reduce([1, 2, 3], (acc, item) => { acc['index' + item ] = item; return acc }, {}))

export default reduce