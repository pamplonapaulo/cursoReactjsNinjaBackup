'use strict'

import React, { Component } from 'react'
import marked from 'marked'
import highlight from 'highlight.js'
import MardownEditor from './markdown-editor'

import './css/style.css'

marked.setOptions({
  highlight: (code) => {
    return highlight.highlightAuto(code).value
  }
})

class App extends Component {
  constructor () {
    super()
    this.state = { value: '' }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value
      })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }
  }

  render () {
    return (
      <MardownEditor
        value={this.state.value}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
      />
    )
  }
}

export default App
