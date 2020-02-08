'use strict'

import React, { Component } from 'react'
import Button from './button.js'
import Square from './square.js'

class App extends Component {
  constructor () {
    console.log('constructor');
    super()
    this.state = {
      color: 'green'
    }
  }

  componentWillMount () {
    console.log('componentWillMount');
  }

  componentDidMount () {
    console.log('componentDidMount');
  }

  render () {
    console.log('render');
    return (
      <div>
        <Square color={this.state.color} />

        {['red', 'green', 'blue'].map((color, index) => (
          <Button 
            key={index}
            handleClick={() => this.setState({ color })}>
              {color}
          </Button>
        ))}

      </div>
    )
  }
}

export default App
