import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Button,
  Container,
  Divider as MaterialDivider,
  Paper,
  Typography
} from '@material-ui/core'
import {
  Content,
  H4,
  H6,
  OrderInfo
} from 'ui'
import FooterCheckout from 'pages/checkout/footer-checkout'
import { useAuth, useOrder } from 'hooks'
import { HOME } from 'routes'

function CheckoutSuccess () {
  const { userInfo } = useAuth()
  const { order } = useOrder()

  return (
    <>
      <Content>
        <Header>
          <H4>There you go, {userInfo.user.firstName}!</H4>
          <Typography>Your order is being prepared and will be delivered in up to:</Typography>

          <H6>40 minutes</H6>
        </Header>

        <Container maxWidth='sm'>
          <PaperContainer>
            <H6>Your order</H6>
            <OrderInfo />

            <Divider />

            <H6>Delivery address:</H6>
            <Typography>
              {order.address.number}
              {' '}
              {order.address.address},
              {' '}
              {order.address.complement}<br />
              Neighborhood: {order.address.district}<br />
              Postcode: {order.address.code}<br />
              {order.address.city}/ {order.address.state}
            </Typography>

            <Divider />

            <H6>Contact phone number:</H6>
            <Typography>{order.phone}</Typography>

          </PaperContainer>
        </Container>
      </Content>

      <FooterCheckout justifyContent='center'>
        <Button
          color='secondary'
          size='large'
          component={Link}
          to={HOME}
        >
          {'<'} Back to home
        </Button>
      </FooterCheckout>
    </>
  )
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  text-align: center;
`

const PaperContainer = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(3)}px
`

const Divider = styled(MaterialDivider)`
  margin: ${({ theme }) => theme.spacing(2, 3)}
`

export default CheckoutSuccess
