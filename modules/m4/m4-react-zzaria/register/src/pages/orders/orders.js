import React, { useMemo } from 'react'
import styled from 'styled-components'
import {
  Fab,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography
} from '@material-ui/core'
import { Check, DonutLarge, Motorcycle } from '@material-ui/icons'
import { TableContainer, TableTitle, THead, Th } from 'ui'
import { useOrders } from 'hooks'

import { singularOrPlural } from 'utils'

function Orders () {
  const { orders, status, updateOrder } = useOrders()

  const allOrderStatus = useMemo(() => {
    return [
      {
        title: 'Pending orders',
        type: status.pending,
        nextAction: status.inProgress,
        nextButtonTitle: 'Under production',
        icon: DonutLarge
      },
      {
        title: 'Under production',
        type: status.inProgress,
        nextAction: status.outForDelivery,
        nextButtonTitle: 'On it\'s way',
        icon: Motorcycle
      },
      {
        title: 'On it\'s way',
        type: status.outForDelivery,
        nextAction: status.delivered,
        nextButtonTitle: 'Done',
        icon: Check
      },
      {
        title: 'Done',
        type: status.delivered
      }
    ]
  }, [status])

  function getHour (date) {
    const options = {
      hour: 'numeric',
      minute: 'numeric'
    }

    return Intl.DateTimeFormat('pt-BR', options).format(date)
  }

  return allOrderStatus.map(orderStatus => (
    <TableContainer key={orderStatus.title}>
      <TableTitle>
        {orderStatus.title}
      </TableTitle>
      <Table>
        <THead>
          <TableRow>
            <Th>
              <Typography>
                Order details
              </Typography>
            </Th>

            {orderStatus.nextAction && (
              <Th align='center'>
                <Typography>
                  Change status
                </Typography>
              </Th>
            )}
          </TableRow>
        </THead>

        <TableBody>
          {orders?.[orderStatus.type].length === 0 && (
            <TableRow>
              <TableCell>
                <Typography>No orders here.</Typography>
              </TableCell>
            </TableRow>
          )}
          {orders?.[orderStatus.type].map(order => {
            const {
              address,
              number,
              complement,
              district,
              code: postcode,
              city,
              state
            } = order.address

            return (
              <TableRow key={order.id}>
                <TableCell>
                  <div>
                    <Subtitle>
                      Order time: {' '} {getHour(order.createdAt.toDate())}
                    </Subtitle>
                  </div>

                  <div>
                    <Subtitle>
                      Order:
                    </Subtitle>

                    <ul>
                      {order.pizzas.map((pizza, index) => (
                        <li key={index}>
                          <Typography>
                            {pizza.amount} {' '}
                            {singularOrPlural(
                              pizza.amount,
                              'pizza',
                              'pizzas'
                            )}{' '}
                            {pizza.size.name.toUpperCase()} of {' '}
                            {pizza.flavours
                              .map(flavour => flavour.name)
                              .reduce((acc, flavour, index, array) => {
                                if (index === 0) {
                                  return flavour
                                }

                                if (index === array.length - 1) {
                                  return `${acc}, and ${flavour}`
                                }

                                return `${acc}, ${flavour}`
                              }, '')}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <Subtitle>
                      Address to delivery
                    </Subtitle>

                    <Typography>
                      {number} {' '} {address} {' '}
                      {complement && `, ${complement}`}<br />
                      {district}<br />
                      Postcode: {postcode}<br />
                      {city} {' / '} {state}
                    </Typography>
                  </div>
                </TableCell>

                {orderStatus.nextAction && (
                  <TableCell align='center'>
                    <Fab
                      color='primary'
                      title={`Change status to "${orderStatus.nextButtonTitle}"`}
                      onClick={() => updateOrder({
                        orderId: order.id,
                        status: orderStatus.nextAction
                      })}
                    >
                      <orderStatus.icon />
                    </Fab>
                  </TableCell>
                )}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  ))
}

const Subtitle = styled(Typography).attrs({
  variant: 'button'
})`
  && {
    font-weight: bold;
  }
`

export default Orders
