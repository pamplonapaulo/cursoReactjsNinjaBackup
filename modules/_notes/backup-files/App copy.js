import React, { Component, Suspense } from 'react';
import './App.css';

const P = React.lazy(() => import('./p'))
const A = React.lazy(() => import('./a'))
const Img = React.lazy(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(import('./img'))
    }, 10000) // emulating long load
  })
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Suspense fallback={<h1>Loading...</h1>}>
            <Suspense fallback={<h1>Loading Image...</h1>}>
              <Img />
            </Suspense>
            <P />
            <A />
          </Suspense>
        </header>
      </div>
    )
  }
}

export default App;
