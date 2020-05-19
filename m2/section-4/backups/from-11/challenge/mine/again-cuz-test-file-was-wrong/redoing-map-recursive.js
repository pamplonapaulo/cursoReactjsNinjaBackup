'use strict'

const recursiveMapFixed = (arr = [], func = (item) => item, originalArr = [], mapped = []) => {
  if (arr.length === 0)
    return mapped

  if (originalArr.length === 0)
    originalArr = arr

  const [head, ...tail] = arr

  mapped.push(func(head, mapped.length, originalArr, arr ))
  return recursiveMapFixed(tail, func, originalArr, mapped)
}

export default recursiveMapFixed