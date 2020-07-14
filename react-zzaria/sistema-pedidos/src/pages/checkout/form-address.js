import React, { useState, useEffect, useReducer } from 'react'
import {
  Grid
} from '@material-ui/core'
import TextField from './text-field'

function FormAddress () {
  const [postcode, setPostcode] = useState('')
  const [addressState, dispatch] = useReducer(reducer, initialState)

  console.log('addressState:', addressState)

  useEffect(() => {
    async function fetchAddress () {
      if (postcode.length < 9) {
        return
      }
      const data = await fetch(
        `https://ws.apicep.com/cep/${postcode}.json`
      )
      const result = await data.json()

      dispatch({
        type: 'UPDATE_FULL_ADDRESS',
        payload: result
      })
    }
    fetchAddress()
  }, [postcode])

  function handleChangePostcode (e) {
    setPostcode(postcodeMask(e.target.value))
  }

  function postcodeMask (value) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
  }

  return (
    <Grid container spacing={2}>
      <TextField
        label='Post Code'
        xs={4}
        autoFocus
        value={postcode}
        onChange={handleChangePostcode}
      />
      <Grid item xs={8} />
      <TextField label='Street name' xs={9} />
      <TextField label='Number' xs={3} />
      <TextField label='Complement' xs={12} />
      <TextField label='City' xs={9} />
      <TextField label='State' xs={3} />
    </Grid>
  )
}

function reducer (state, action) {
  console.log(action)
  if (action.type === 'UPDATE_FULL_ADDRESS') {
    return {
      ...state,
      ...action.payload
    }
  }
  return state
}

const initialState = {
  code: '',
  address: '',
  number: '',
  district: '',
  complement: '',
  city: '',
  state: '',
  error: null
}

export default FormAddress
