'use strict'

import React from 'react'

const Button = ({ children, handleClick }) => (
  <button className='main-button' onClick={handleClick}>
    {children}
  </button>
)

Button.propTypes = {
  handleClick: React.PropTypes.func.isRequired
}

export default Button
//https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
