import React from 'react'
import { Route } from 'react-router-dom'
import TablePizzasFlavours from './table'
import FormRegisterFlavours from './form'
import { PIZZAS_FLAVOURS, NEW, EDIT } from 'routes'

const newFlavourPath = `${PIZZAS_FLAVOURS}${NEW}`
const editFlavourPath = `${PIZZAS_FLAVOURS}${EDIT()}`

function PizzasFlavours () {
  return (
    <>
      <Route path={[newFlavourPath, editFlavourPath]}>
        <FormRegisterFlavours />
      </Route>
      <TablePizzasFlavours />
    </>
  )
}

export default PizzasFlavours
