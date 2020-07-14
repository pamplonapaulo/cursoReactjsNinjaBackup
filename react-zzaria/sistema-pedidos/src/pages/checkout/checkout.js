import React from 'react'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import {
  Button,
  Grid,
  Paper
} from '@material-ui/core'
import {
  Content,
  OrderInfo,
  Title as UiTitle
} from 'ui'
import FooterCheckout from 'pages/checkout/footer-checkout'
import FormAddress from './form-address'
import TextField from './text-field'
import { CHECKOUT_CONFIRMATION, HOME } from 'routes'
import { useOrder } from 'hooks'

function Checkout () {
  const { order } = useOrder()

  if (!order.pizzas.length) {
    return <Redirect to={HOME} />
  }

  return (
    <>
      <Content>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Title>Whats the address to delivery?</Title>
            <PaperContainer>
              <FormAddress />
            </PaperContainer>

            <Title>Whats is your phone number?</Title>
            <PaperContainer>
              <TextField label='Phone Number' xs={4} />
            </PaperContainer>
          </Grid>

          <Grid container item xs={12} md={6} direction='column'>
            <Title>Order details:</Title>
            <PaperContainer>
              <OrderInfo showOptions />
            </PaperContainer>
          </Grid>
        </Grid>
      </Content>

      <FooterCheckout>
        <Button
          variant='contained'
          color='primary'
          component={Link}
          to={CHECKOUT_CONFIRMATION}
        >
          Confirm
        </Button>
      </FooterCheckout>
    </>
  )
}

const Title = styled(UiTitle).attrs({
  variant: 'h6'
})`
  text-align: left;
`

const PaperContainer = styled(Paper)`
  flex-grow: 1;
  margin-bottom: ${({ theme }) => theme.spacing(5)}px;
  padding: ${({ theme }) => theme.spacing(2)}px;
`

export default Checkout