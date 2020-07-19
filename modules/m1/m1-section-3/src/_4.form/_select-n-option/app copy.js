'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '2'
    }
  }
  render () {
    return (
      <div>

      <form>
          <select value={this.state.value} onChange={(e) => {
          this.setState({
              value: e.target.value
          })
          }}>
              <option value='1'>Option 1</option>
              <option value='2'>Option 2</option>
              <option value='3'>Option 3</option>
          </select>
      </form>

      <form>
        <select multiple value={['1', '3']} onChange={(e) => {
          this.setState({
            value: e.target.value
          })
        }}>
          <option value='1'>Option 1</option>
          <option value='2'>Option 2</option>
          <option value='3'>Option 3</option>
        </select>
      </form>
    </div>
    )
  }
}

export default App
