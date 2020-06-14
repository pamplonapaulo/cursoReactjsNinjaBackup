'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import './button.css'
import css from 'strclass'

const Button = ({ onClick, children, kind }) => (
  // <button onClick={onClick} className={`button ${kind ? '-' + kind : ''}`}>
  <button onClick={onClick} className={css({ [`-${kind}`]: kind }, 'button')}>
    {children}
  </button>
)

Button.PropTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  kind: PropTypes.oneOf(['success', 'danger'])
}

export default Button
