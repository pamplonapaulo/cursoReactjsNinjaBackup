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
import { useAuth } from 'hooks'
import FooterCheckout from 'pages/checkout/footer-checkout'
import { HOME } from 'routes'

function CheckoutSuccess () {
  const { userInfo } = useAuth()
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
            <Typography>1 Street Code, 01100011</Typography>

            <Divider />

            <H6>Contact phone number:</H6>
            <Typography>(11) 9999 999 99</Typography>

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
