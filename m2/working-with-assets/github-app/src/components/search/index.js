'use strict'

import React, { PropTypes } from 'react'
import style from './search.css'
//import './search.css'


const Search = ({ isDisabled, handleSearch }) => (
  <div className={style.search}>
  {/* <div className='search'> */}
    <input
      type='search'
      placeholder={'Enter GitHub user\'s name'}
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
