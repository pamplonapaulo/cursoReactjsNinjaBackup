'use strict'

import React from 'react'

const SearchCep = ({
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

export default SearchCep
