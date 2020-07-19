'use strict'

import React, { Component } from 'react'

import './css/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      color: {
        otherColor: 'purple',
        moreOtherColor: 'white'
      }
    }

    this.handleClick = () => {
      this.setState({
        color: {
          ...this.state.color,
          otherColor: 'black'
        }
      })
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextState.color.otherColor === this.state.color.otherColor) {
      return false
    }
    return true
  }

  render () {
    console.log('render...')
    return (
      <div>
        <span>Color name: {this.state.color.otherColor}</span>
        <br />
        <span>More other color: {this.state.color.moreOtherColor}</span>
        <br />
        <button onClick={this.handleClick}>Change color to black</button>
      </div>
    )
  }
}

export default App
