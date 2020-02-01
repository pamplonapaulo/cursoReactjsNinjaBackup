'use strict'

import React, { Component } from 'react'
import LikeButton from './like-button'
import SearchButton from './search-button'

// import Square from './square'

class App extends Component {
  render () {
    return (
      <div className='container'>
          <LikeButton />
          <SearchButton />
      </div>
    )
  }
}

// import React from 'react'
// class App extends React.Component {
//   render () {
//     return (
//       <div className='container'>
//         <Title name='Fernandos' />
//       </div>
//     )
//   }
// }
/*
const App = React.createClass({
  render: function () {
  return (
      <div className='do-not-use-class' id='id-is-ok'>
      </div>
  )
}
})

const App = React.createClass({
  render: function () {
  return (
      <div className='do-not-use-class' id='id-is-ok'>
        <Title name='Fernando' car={{model: 'Wolks', year: 1980}} />
      </div>
  )
}
})
*/

export default App
