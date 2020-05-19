'use strict'

const filter = (arr = [], func = (item) => item) => {

  return (function filterInternal(arrayInternal, counter, finalArray) {
    const [head, ...tail] = arrayInternal

    if ((counter) == arr.length || arrayInternal.length === 0) 
      return finalArray

    if (func(head, counter, arr))
      finalArray.push(head)
    
    return filterInternal(tail, counter + 1, finalArray)
  })(arr, 0, [])
}
export default filter

//console.log(filter([0, 1, 2, 3, 4, 5, 6, 7, 8], (item) => item < 5))


// requisitos passo-a-passo:

// 1. se não for passado array, retornar array em branco
// 2. se o array for passado em branco, retornar array em branco
// 3. 
// 4. 
