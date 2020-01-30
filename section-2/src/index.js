'use strict'
/*
var sum = require('./app')
console.log(sum(1,2))
*/

import React from 'react' // ES6/2015
// var React = require('react') // Old

    /*Longhand Notation
    import ReactDOM from 'react-dom' // ES6/2015
    */
    // var ReactDOM = require('react-dom') // Old
    

    // Longhand Notation:
    // import { render : render } from 'react-dom' // (with unknown error compiling)
    // Shorthand notation:
    import { render } from 'react-dom'

import Title from './app' // ES6/2015 
// var Title = require('./app') // Old

/* Longhand Notation
ReactDOM.render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)*/

// Shorthand notation:
render(
    <Title />,
    // React.createElement(Title),
    document.querySelector('[data-js="app"]')
)