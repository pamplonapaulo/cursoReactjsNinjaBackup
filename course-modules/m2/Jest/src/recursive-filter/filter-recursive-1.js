'use strict'

const recursiveFilter = (arr = [], func = (item) => item, originalArr = [], mapped = []) => {
  if (arr.length === 0)
    return mapped

  if (originalArr.length === 0)
    originalArr = arr

  const [head, ...tail] = arr

  if(func(head, mapped.length, originalArr, arr ))
    mapped.push(head)

  return recursiveFilter(tail, func, originalArr, mapped)
}

//console.log(recursiveFilter( [0, 1, 2, 3, 4, 5, 6, 7], (item) => item < 2))
//console.log(recursiveFilter([{ id: 15 },{ id: -1 },{ id: undefined },{ id: 'string' },{ id: 12.2 },{ },{ id: null },{ id: NaN },{ id: true }], (item, index, array) => typeof(item.id) === 'number'))

export default recursiveFilter