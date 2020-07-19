import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow
} from '@material-ui/core'
import { Add, Delete, Edit } from '@material-ui/icons'
import {
  TableButton,
  TableContainer,
  TableTitle,
  TableTitleContainer,
  Th,
  THead
} from 'ui'
import { useCollection } from 'hooks'
import { singularOrPlural } from 'utils'
import { PIZZAS_SIZES, NEW, EDIT } from 'routes'

function TablePizzasSizes () {
  const {
    data: pizzasSizes,
    removePizzaSize: remove
  } = useCollection('pizzasSizes')
  const newSizePath = useRouteMatch(`${PIZZAS_SIZES}${NEW}`)

  return (
    <TableContainer>
      <TableTitleContainer>
        <Grid item>
          <TableTitle>
            Sizes:
          </TableTitle>
        </Grid>

        <Grid item>
          <TableButton
            startIcon={<Add />}
            color='primary'
            component={Link}
            to={`${PIZZAS_SIZES}${NEW}`}
            disabled={!!newSizePath}
          >
            Add new size
          </TableButton>
        </Grid>
      </TableTitleContainer>

      <Table>
        <THead>
          <TableRow>
            <Th>Name</Th>
            <Th>Diameter</Th>
            <Th>Slices</Th>
            <Th>Flavours</Th>
            <Th />
          </TableRow>
        </THead>

        <TableBody>
          {pizzasSizes?.length === 0 && (
            <TableRow>
              <TableCell>
                No sizes registered.
              </TableCell>
            </TableRow>
          )}
          {pizzasSizes?.map(pizza => (
            <TableRow key={pizza.id}>
              <TableCell>{pizza.name}</TableCell>
              <TableCell>{pizza.size} cm.</TableCell>
              <TableCell>{pizza.slices} slices</TableCell>
              <TableCell>
                {pizza.flavours} {' '}
                {singularOrPlural(pizza.flavours, 'flavour', 'flavours')}
              </TableCell>

              <TableCell align='right'>
                <TableButton
                  startIcon={<Edit />}
                  component={Link}
                  to={`${PIZZAS_SIZES}${EDIT(pizza.id)}`}
                >
                  Edit
                </TableButton>

                <TableButton
                  startIcon={<Delete />}
                  color='secondary'
                  onClick={() => remove(pizza.id)}
                >
                  Remove
                </TableButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TablePizzasSizes
