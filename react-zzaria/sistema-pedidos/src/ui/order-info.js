import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import {
  IconButton,
  List,
  ListItem as MaterialListItem,
  Typography
} from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { singularOrPlural } from 'utils'
import { useOrder } from 'hooks'

function OrderInfo ({ showOptions }) {
  const { order, removePizzaFromOrder } = useOrder()

  return (
    <List>
      {order.pizzas.map((pizza) => {
        const { pizzaFlavours, pizzaSize, amount } = pizza
        const { name, slices, flavours } = pizzaSize
        return (
          <ListItem key={pizza.id}>
            <Typography>
              <b>{amount}</b> {' '}
              {singularOrPlural(amount, 'pizza', 'pizzas')} {' '}
              <b>{name.toUpperCase()}</b> {'- '}
              ({slices} slices,{' '}
              {flavours} {singularOrPlural(flavours, 'flavour', 'flavours')})

              <br />

              {singularOrPlural(pizzaFlavours.length, 'with flavour', 'with flavours')}{' '}
              <b>{pizzaFlavours.map(({ name }) => name).join(', ')}</b>
            </Typography>

            {showOptions && (
              <IconButton
                title='Remove'
                color='secondary'
                onClick={() => removePizzaFromOrder(pizza.id)}
              >
                <Close />
              </IconButton>
            )}
          </ListItem>
        )
      })}
    </List>
  )
}

OrderInfo.propTypes = {
  showOptions: t.bool
}

const ListItem = styled(MaterialListItem)`
  && {
    display: flex;
    justify-content: space-between;
  }
`

export default OrderInfo
