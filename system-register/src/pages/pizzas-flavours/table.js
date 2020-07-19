import React from 'react'
import t from 'prop-types'
import { Link, useRouteMatch } from 'react-router-dom'
import {
  Grid,
  List,
  ListItem as MaterialListItem,
  ListItemText,
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

// import { singularOrPlural } from 'utils'
import { PIZZAS_FLAVOURS, NEW, EDIT } from 'routes'
import { useCollection } from 'hooks'

function TablePizzasFlavours () {
  const newFlavourPath = useRouteMatch(`${PIZZAS_FLAVOURS}${NEW}`)
  const { data: pizzasFlavours, remove } = useCollection('pizzasFlavours')
  const { data: pizzasSizes } = useCollection('pizzasSizes')

  console.log(pizzasFlavours)

  return (

    <TableContainer>
      <TableTitleContainer>
        <Grid item>
          <TableTitle>
            Flavours:
          </TableTitle>
        </Grid>

        <Grid item>
          <TableButton
            startIcon={<Add />}
            color='primary'
            component={Link}
            to={`${PIZZAS_FLAVOURS}${NEW}`}
            disabled={!!newFlavourPath}
          >
            Add new flavour
          </TableButton>
        </Grid>
      </TableTitleContainer>

      <Table>
        <THead>
          <TableRow>
            <Th>Image</Th>
            <Th>Name</Th>
            <Th>Prices</Th>
            <Th />
          </TableRow>
        </THead>

        <TableBody>
          {pizzasFlavours?.map(pizza => (
            <TableRow key={pizza.id}>
              <TableCell>
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  style={{
                    display: 'block',
                    width: '50px'
                  }}
                />
              </TableCell>

              <TableCell>{pizza.name}</TableCell>

              <TableCell>
                <List>
                  {Object.entries(pizza.value).map(([sizeId, value]) => {
                    const sizeName = pizzasSizes
                      ?.find(s => s.id === sizeId)
                      ?.name

                    return (
                      <ListItem
                        key={sizeId}
                        name={sizeName}
                        price={value}
                      />
                    )
                  })}
                </List>
              </TableCell>

              <TableCell align='right'>
                <TableButton
                  startIcon={<Edit />}
                  component={Link}
                  to={`${PIZZAS_FLAVOURS}${EDIT(pizza.id)}`}
                >
                  Edit
                </TableButton>

                <TableButton
                  color='secondary'
                  startIcon={<Delete />}
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

const ListItem = ({ name = '', price }) => (
  <MaterialListItem>
    <ListItemText>
      <strong>{name}</strong>: R$ {price}
    </ListItemText>
  </MaterialListItem>
)

ListItem.propTypes = {
  name: t.string,
  price: t.number.isRequired
}

export default TablePizzasFlavours
