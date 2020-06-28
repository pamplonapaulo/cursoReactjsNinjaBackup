'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import address from './index'
import { UPDATE_ADDRESS } from './actions'

it('should action UPDATE_ADDRESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1
  })

  const action = deepFreeze({
    type: [UPDATE_ADDRESS],
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
    status: 1
  }

  expect(address(before, action)).to.be.deep.equal(after)
})
