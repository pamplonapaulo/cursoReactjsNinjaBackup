'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { fetchAddress } from 'reducers/address/action-creators'

export const SearchCep = ({
  address,
  city,
  code,
  district,
  state,
  status,
  isFetching,
  handleSubmit
}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input type='text' name='cep' />
      <button type='submit' disabled={isFetching}>
        {isFetching ? 'Loading...' : 'Search address'}
      </button>
    </form>

    {console.log('status: ' + status)}

    {status === 400 && <div>Post Code not found</div>}

    {status === 200 && (
      <table>
        <thead>
          <tr>
            <td>Post Code</td>
            <td>Address</td>
            <td>Neighborhood</td>
            <td>City</td>
            <td>State</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{code}</td>
            <td>{address}</td>
            <td>{district}</td>
            <td>{city}</td>
            <td>{state}</td>
          </tr>
        </tbody>
      </table>
    )}

  </div>
)

const mapStateToProps = (state) => state.address

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault()
    dispatch(fetchAddress(e.target.cep.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCep)
