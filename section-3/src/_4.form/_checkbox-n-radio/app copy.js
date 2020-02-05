'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'Starter value',
      checked: false
    }
  }
  render () {
    return (
      <div>
      <form>
        <input type='text' value={this.state.value} onChange={(e) => {
          console.log(e.target)
          console.log(e.nativeEvent)
          this.setState({
            value: e.target.value
          })
        }} />
        <label>
          <input 
          type='checkbox' 
          value='my-checkbox1' 
          checked={this.state.checked} 
          onChange={(e) => {
            this.setState({ checked: !this.state.checked })
          }} />
          Controlled
        </label>

        <label>
          <input
          type='checkbox'
          value='my-checkbox2'
          defaultChecked1 />
          Uncontrolled
        </label>

        <input type='radio' name='rd' value='1' defaultChecked />Radio 1
        <input type='radio' name='rd' value='2' />Radio 2

      </form>
    </div>
    )
  }
}

export default App
