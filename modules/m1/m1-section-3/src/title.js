'use strict'

import React from 'react'

/*
const Title = (props) => (
    <h1>Oi, {`${props.name} ${props.car.model}`}</h1>
)
*/

// pure function:
const Title = ({ name, car }) => (
    <h1>Oi, {`${name} ${car.model}`}</h1>
)

Title.defaultProps = {
    name: 'Unknown',
    car: {
        model: 'Tesla'
    }
}


/*
const Title = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'Desconhecido',
            car: {
                year: 1980,
                model: 'Ford'
            }
        }
    },
    render: function () {
        return (
        <h1>Hello {this.props.name + ' has a car made by ' + this.props.car.model + ' on ' + this.props.car.year}!</h1>
        )
    }
})
*/

export default Title
