import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import {
  Button,
  Grid,
  Typography
} from '@material-ui/core'
import { TextField } from 'ui'
import { PIZZAS_SIZES } from 'routes'
import { useCollection } from 'hooks'

function FormRegisterSizes () {
  const { add } = useCollection('pizzasSizes')
  const history = useHistory()

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    const { name, size, slices, flavours } = e.target.elements

    const normalizedData = {
      name: name.value,
      size: +size.value,
      slices: +slices.value,
      flavours: +flavours.value
    }

    await add(normalizedData)
    history.push(PIZZAS_SIZES)
  }, [add, history])

  return (
    <Container>
      <Grid item xs={12}>
        <Typography variant='h4'>Add new size</Typography>
      </Grid>

      <Form onSubmit={handleSubmit}>
        <TextField
          label='Size Name'
          name='name'
        />

        <TextField
          label='Diameter'
          name='size'
        />

        <TextField
          label='Slices amount'
          name='slices'
        />

        <TextField
          label='Flavours amount'
          name='flavours'
        />

        <Grid item container justify='flex-end' spacing={2}>
          <Grid item>
            <Button
              variant='contained'
              component={Link}
              to={PIZZAS_SIZES}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary' type='submit'>Register</Button>
          </Grid>
        </Grid>

      </Form>
    </Container>
  )
}

const Form = styled(Grid).attrs({
  item: true,
  container: true,
  xs: 12,
  spacing: 2,
  component: 'form'
})``

const Container = styled(Grid).attrs({
  container: true,
  spacing: 2
})`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(5)}px;
  }
`

export default FormRegisterSizes
