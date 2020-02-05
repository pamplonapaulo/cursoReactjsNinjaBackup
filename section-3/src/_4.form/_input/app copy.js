'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'Starter value'
    }
  }
  render () {
    return (
      <div>
      <form>
        {/* <input type="text" defaultValue='Default Value' /> */}
        <input type='text' value={this.state.value} onChange={(e) => {
          console.log(e.target)
          console.log(e.nativeEvent)
          this.setState({
            value: e.target.value
          })
        }} />
      </form>
    </div>
    )
  }
}

export default App
