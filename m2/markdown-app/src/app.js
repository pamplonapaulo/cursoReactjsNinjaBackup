'use strict'

import React, { Component } from 'react'
import MardownEditor from './markdown-editor'

import './css/style.css'


class App extends Component {
  constructor () {
    super()
    this.state = { value: ''}

    this.handleChange = (e) => {

      this.setState({
        value: e.target.value
      })
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    
    this.setState({
      value: e.target.textarea.value
    })
  }

  render () {
    return (
      <MardownEditor
        value={this.state.value}
        handleChange={this.handleChange}
      />
    )
  }
}

export default App
