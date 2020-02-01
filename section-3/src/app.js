'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
    render: function () {
    return (
        <div className='do-not-use-class' id='id-is-ok'>
        {/* <Title name='Fernando' car={{model: 'Wolks', year: 1980}} /> */}
        <Title name='Fernando' />
      </div>
    )
  }
})

export default App
