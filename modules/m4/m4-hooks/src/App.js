import React, { useState, useEffect } from 'react'

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <CounterClass />
    <CounterFunction />
  </div>
)

class CounterClass extends React.PureComponent {
  state = {
    counter: 0
  }

  updateDocumentTitle () {
    document.title = `CounterClass: ${this.state.counter}`
  }

  componentDidMount () {
    this.updateDocumentTitle ()
  }

  componentDidUpdate (prevProps, prevState) {
    this.updateDocumentTitle ()
    setInterval(() => {
      this.setState(prevState => {
        return {
          counter: prevState.counter + 1
        }
      })
    }, 1000)   
  }

  render () {
    return (
      <>
        <Counter
          counter={this.state.counter}
          increment={() => {
            this.setState((prevState) => ({
              counter: prevState.counter + 1
            }))
          }}

          decrement={() => {
            this.setState((prevState) => ({
              counter: prevState.counter - 1
            }))
          }}
        />
      </>
    )
  }
}

function CounterFunction () {
  const [counter, setCounter] = useState(0)
  
  useEffect(() => {
    console.log('2 execuetd useEffect')
    document.title = `CounterFunction: ${counter}`

    const timer = setInterval(() => {
      setCounter(c => c + 1)
    }, 1000)

    return () => {
      console.log('1 cleaned useEffect')
      clearInterval(timer)
      console.log(' ')
    }
  }, [])

  return (
    <>
      <Counter
        counter={counter}
        increment={() => {
          setCounter(c => c + 1)
        }}

        decrement={() => {
          setCounter(c => c - 1)
        }}
      />
    </>
  )
}

const Counter = ({ counter, increment, decrement }) => (
  <div style={{ textAlign: 'center' }}>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
)

export default App
