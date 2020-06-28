'use strict'

// ES5: const expect = require('chai').expect
// E6: import { expect } from 'chai'

import { expect } from 'chai'
const sum = require('./sum') 

it('sum should be a function', () => {
  expect(sum).to.be.a('function')
})





/*
describe('#SCOPE something', () => {

  it('Test 1', () => {
    console.assert(1 == 2, '1 not equal to 2')
  })

  it('Test 2', () => {

  })
  
})

describe('#SCOPE 2', () => {

  it('Test 3', () => {

  })

  it('Test 4', () => {

  })
  
})
*/

/*
it('Test 1', () => {
  console.assert(1 == 2, '1 not equal to 2')
})
*/

/*
it('1 equals to 1', () => {
  expect(1).toBe(2)
})
*/

