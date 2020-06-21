'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Message from 'components/message'

class MessageList extends Component {
  componentDidMount () {
    this.context.store.subscribe(() => this.forceUpdate())
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <ul>
        {this.props.messages.map((message) => (
          <Message
            text={message.text}
            color={message.color}
            key={message.text}
          />
        ))}
      </ul>
    )
  }
}

MessageList.contextTypes = {
  store: PropTypes.object
}

export default MessageList
