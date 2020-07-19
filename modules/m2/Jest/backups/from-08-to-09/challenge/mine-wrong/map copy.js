'use strict'

export default (arr) => {
  let newArr = []

  for(let i = 0; i < arr.length; i++){

    let obj = { item: arr[i], index: i, array: arr }

    newArr.push(obj)
  }
  return newArr
}
