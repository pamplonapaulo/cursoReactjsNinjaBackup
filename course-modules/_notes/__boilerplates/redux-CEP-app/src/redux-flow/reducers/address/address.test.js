'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import address from './index'
import { FETCHING, SUCCESS } from './actions'

it('should action SUCCESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1,
    isFetching: true
  })

  const action = deepFreeze({
    type: [SUCCESS],
    payload: {
      address: 'Rua das Laranjeiras - até 146',
      city: 'Rio de Janeiro',
      code: '22240-000',
      district: 'Laranjeiras',
      state: 'RJ',
      status: 1
    }
  })

  const after = {
    address: 'Rua das Laranjeiras - até 146',
    city: 'Rio de Janeiro',
    code: '22240-000',
    district: 'Laranjeiras',
    state: 'RJ',
    status: 1,
    isFetching: false
  }

  expect(address(before, action)).to.be.deep.equal(after)
})
