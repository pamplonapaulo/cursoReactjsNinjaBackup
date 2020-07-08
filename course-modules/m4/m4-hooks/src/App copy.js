import React, { useState } from 'react'

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <CounterClass />
    <CounterFunction />
  </div>
)

class CounterClass extends React.PureComponent {
  state = {
    counter: 0,
    toggle: false
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

        {this.state.toggle && <h1>Visible!</h1>}
        <button onClick={() => {
          this.setState((prevState) => ({
            toggle: !prevState.toggle
          }))
        }}>Toggle</button>
      </>
    )
  }
}

function CounterFunction () {
  // const [counter, setCounter] = useState(0)
  // const [toggle, setToggle] = useState(false)

  const [state, setState] = useState({
    counter: 0,
    toggle: false
  })

  const [todos, setTodos] = useState([
    { id: 0, text: 'hey', completed: false }
  ])

  return (
    <>
      <Counter
        counter={state.counter}
        increment={() => {
          // setCounter(c => c + 1)
          setState(prevState => {
            return {
              ...prevState,
              counter: prevState.counter + 1
            }
          })
        }}

        decrement={() => {
          // setCounter(c => c - 1)
          setState(prevState => {
            return {
              ...prevState,
              counter: prevState.counter - 1
            }
          })
        }}
      />

      {state.toggle && <h1>Visible!</h1>}
      <button onClick={() => {
        // setToggle(!toggle)
        setState(prevState => {
          return {
            ...prevState,
            toggle: !prevState.toggle
          }
        })
      }}>Toggle</button>
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
