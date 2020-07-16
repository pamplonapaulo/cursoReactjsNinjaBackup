import React, { useState } from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import { Button, Input as MaterialInput } from '@material-ui/core'
import {
  Content,
  Footer,
  H4,
  HeaderContent
} from 'ui'
import { HOME, CHECKOUT } from 'routes'
import { useOrder } from 'hooks'

function ChoosePizzaAmount ({ location }) {
  const [amount, setAmount] = useState(1)
  const { addPizzaToOrder } = useOrder()

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  function handleChange (e) {
    const { value } = e.target

    if (value >= 1) {
      setAmount(value)
    }
  }

  function addPizza () {
    addPizzaToOrder({
      ...location.state,
      amount
    })
  }

  return (
    <>
      <Content>
        <HeaderContent>
          <H4>
            How many pizzas would you like with this flavours?
          </H4>
        </HeaderContent>

        <MainContent>
          <Input
            value={amount}
            onChange={handleChange}
            autoFocus
          />

          <ButtonAddPizza to={HOME} onClick={addPizza}>
            Choose extra pizza
          </ButtonAddPizza>
        </MainContent>
      </Content>

      <Footer
        buttons={{
          back: {
            children: 'Change flavours'
          },

          action: {
            to: CHECKOUT,
            onClick: addPizza,
            children: 'Finish order'
          }
        }}
      />
    </>
  )
}

ChoosePizzaAmount.propTypes = {
  location: t.object.isRequired
}

const MainContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(2)}px
`

const Input = styled(MaterialInput).attrs({
  type: 'number'
})`
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;

  & input {
    font-size: 80px;
    padding: 10px;
    text-align: center;
    width: 150px;
  }

  & input::-webkit-inner-spin-button {
    opacity: 1;
  }
`

const ButtonAddPizza = styled(Button).attrs({
  color: 'secondary',
  component: Link,
  variant: 'contained'
})`
  text-align: center;
`

export default ChoosePizzaAmount
