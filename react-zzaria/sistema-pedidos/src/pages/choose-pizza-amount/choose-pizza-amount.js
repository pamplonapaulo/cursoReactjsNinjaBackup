import React from 'react'
import styled from 'styled-components'
import { Input as MaterialInput } from '@material-ui/core'
import {
  Content,
  Footer,
  H4,
  HeaderContent
} from 'ui'
import { CHOOSE_PIZZA_FLAVOURS } from 'routes'

function ChoosePizzaAmount () {
  return (
    <>
      <Content>
        <HeaderContent>
          <H4>
            How many pizzas would you like with this flavours?
          </H4>
        </HeaderContent>

        <MainContent>
          <Input defaultValue='1' />
        </MainContent>
      </Content>

      <Footer
        buttons={[
          {
            to: CHOOSE_PIZZA_FLAVOURS,
            children: 'Change flavours'
          },

          {
            to: '/',
            children: 'Finish order',
            color: 'primary'
          }
        ]}
      />
    </>
  )
}

const Input = styled(MaterialInput).attrs({
  type: 'number'
})`
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

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(2)}px
`

export default ChoosePizzaAmount
