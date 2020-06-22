'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ text }, { color }) => (
  <li style={{ background: color }}>
    {text}
  </li>
)

Message.contextTypes = {
  color: PropTypes.string
}

export default Message
