'use strict'

import React, { PureComponent } from 'react'

import './css/style.css'

class App extends PureComponent {
  constructor () {
    super()
    /*
    this.state = {
      title: '...',
      Component: 'div'
    }*/

    this.state = {
      counter: 0
    }

  }

  getTitle () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('My app with async / await!')
      }, 2000)
    })
  }

  async componentDidMount () {
    const title = await import('components/title')

    this.setState({ counter: this.state.counter + 1 }, () => {
      this.setState({ counter: this.state.counter + 1 }, () => {
        this.setState({ counter: this.state.counter + 1 }, () => {
          this.setState({ counter: this.state.counter + 1 })
        })
      })
    })

    /*
    this.setState({
      title: await this.getTitle(),
      Component: title.default
    })*/
  }

  render () {
    const { counter } = this.state
    console.log('render:', counter)

    return (
      <div>
        {/* <this.state.Component>{this.state.title}</this.state.Component> */}

        counter: {counter}

      </div>
    )
  }
}

export default App
