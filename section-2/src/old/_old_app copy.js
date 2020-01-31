'use strict'
/*
function sum(val1, val2){
    return val1 + val2
}
module.exports = sum
*/

import React from 'react' // ES6/2015
// var React = require('react')

var Title = React.createClass({
    render: function(){
        //return React.createElement('h1', null, 'Título 5')
        return <h1>222babel-preset-react is working</h1>
    }
})

// module.exports = Title // Old
export default Title // ES6/2015