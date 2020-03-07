'use strict'

// Refactoring (no mutability):
const isInitialValueUndefined = (initialValue) => initialValue === undefined

const reduce = (arr, func, initialValue) => {
  
  /* Imperative style with mutability:
  let acc = initialValue
  let arrCopy = arr

  if (initialValue === undefined) {
    acc = arr[0]
    arrCopy = arr.slice(1)
  }

  for (let i = 0; i < arrCopy.length; i++)
    acc = func(acc, arrCopy[i], i, arrCopy)    

  return acc
  */

  // Recursive style without mutability:
  const acc = isInitialValueUndefined(initialValue) ? arr[0] : initialValue
  const arrCopy = isInitialValueUndefined(initialValue) ? arr.slice(1) : arr

  return (function reduceInternal (accInternal, arrInternal, counter) {
    const [head, ...tail] = arrInternal
    const accNext = () => func(accInternal, head, counter, arrCopy) // this way ('() => func') the func won't be excecuted 

    return arrInternal.length === 0
      ? accInternal
      : reduceInternal(accNext(), tail, counter + 1)

  })(acc, arrCopy, 0)
}

//console.log([1, 2, 3, 4].reduce((acc, item) => acc + item))
//console.log(reduce([1, 2, 3], (acc, item) => acc + item))
//console.log([1, 2, 3].reduce((acc, item) => acc + item))

//console.log(reduce([1, 2, 3], (acc, item) => acc + item))
//console.log(reduce([0, 1, 2, 3, 4], (acc, item) => acc + item))
//console.log(reduce([0, 1, 2, 3, 4], (acc, item) => acc + item, 2))

//console.log(reduce([1, 2, 3], (acc, item) => { acc['index' + item ] = item; return acc }, {}))

export default reduce