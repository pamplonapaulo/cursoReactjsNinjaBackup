'use strict'

import React from 'react' // ES6/2015
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