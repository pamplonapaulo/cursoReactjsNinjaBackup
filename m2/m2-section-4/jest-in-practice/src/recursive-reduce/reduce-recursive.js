'use strict'

const reduce = (arr, func, acc) => {

  acc = acc === undefined ? 0 : acc

  for (let i = 0; i < arr.length; i++)
    acc = func(acc, arr[i])    

  return acc
}

//console.log([1, 2, 3, 4].reduce((acc, item) => acc + item))
//console.log([1, 2, 3].reduce((acc, item) => acc + item))
//console.log(reduce([1, 2, 3], (acc, item) => acc + item))
//console.log(reduce([0, 1, 2, 3, 4], (acc, item) => acc + item))
//console.log(reduce([0, 1, 2, 3, 4], (acc, item) => acc + item, 2))

//console.log(reduce([1, 2, 3], (acc, item) => { acc['index' + item ] = item; return acc }, {}))

export default reduce