'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Message extends Component {
  constructor () {
    super()
    this.state = { loading: true }
  }
  componentDidMount () {
    this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate())
    this.timer = setTimeout(() => {
      this.setState({ loading: false })
    }, 2000)
  }

  componentWillUnmount () {
    this.unsubscribe()
    clearTimeout(this.timer)
  }

  render () {
    return this.state.loading ? <div>Loading...</div> : (
      <li style={{ background: this.context.store.color }}>
        {this.props.text}
        <button onClick={this.context.store.setColor(this.props.color, () => this.forceUpdate())}>Change color</button>
      </li>
    )
  }
}

Message.contextTypes = {
  store: PropTypes.object
}

export default Message
