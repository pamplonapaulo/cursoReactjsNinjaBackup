const recursiveMap = (arr, func, mapped) => {
  if (arr.length === 0)
    return mapped

  // Old-Fashion - Paulo version:
  //mapped.push(func(arr[0], mapped.length, arr))
  //arr = arr.slice(1)
  //return recursiveMap(arr, func, mapped)

  // ES6 - Paulo version:
  mapped.push(func(arr[0], mapped.length, arr))
  const [head, ...tail] = arr
  return recursiveMap(tail, func, mapped)
}

//console.log(recursiveMap( [1, 2, 3], (item) => item * 3, [] ))
console.log(recursiveMap( [1, 2, 3], (item, index) => index * 2, [] ))
//console.log(recursiveMap( [1, 2, 3], (item, index, array) => item + index, [] ))
