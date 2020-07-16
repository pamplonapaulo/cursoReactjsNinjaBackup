import React, { useState, useEffect, useReducer, useRef } from 'react'
import t from 'prop-types'
import {
  CircularProgress,
  Grid
} from '@material-ui/core'
import TextField from './text-field'

function FormAddress ({ onUpdate = () => {} }) {
  const [postcode, setPostcode] = useState('')
  const [fetchingPostcode, setFetchingPostcode] = useState(false)
  const [addressState, dispatch] = useReducer(reducer, initialState)
  const numberField = useRef()
  const addressField = useRef()

  useEffect(() => {
    onUpdate(addressState)
  }, [addressState, onUpdate])

  useEffect(() => {
    async function fetchAddress () {
      if (postcode.length < 9) {
        return
      }

      setFetchingPostcode(true)

      const data = await fetch(
        `https://ws.apicep.com/cep/${postcode}.json`
      )
      setFetchingPostcode(false)

      if (!data.ok) {
        dispatch({ type: 'RESET' })
        addressField.current.focus()
        return
      }

      const result = await data.json()

      if (!result.ok) {
        dispatch({
          type: 'FAIL',
          payload: {
            error: result.message
          }
        })
        return
      }

      dispatch({
        type: 'UPDATE_FULL_ADDRESS',
        payload: result
      })

      numberField.current.focus()
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

  function handleChangeField (e) {
    const { name, value } = e.target

    dispatch({
      type: 'UPDATE_FIELD',
      payload: { name, value }
    })
  }

  return (
    <Grid container spacing={2} alignItems='center'>
      <TextField
        label='Post Code'
        xs={4}
        autoFocus
        value={postcode}
        onChange={handleChangePostcode}
        error={!!addressState.error}
      />
      <Grid item xs={8}>
        {fetchingPostcode && <CircularProgress size={20} />}
      </Grid>
      {[
        {
          label: 'Street name',
          xs: 9,
          name: 'address',
          inputRef: addressField
        },
        {
          label: 'Number',
          xs: 3,
          name: 'number',
          inputRef: numberField
        },
        {
          label: 'Complement',
          xs: 12,
          name: 'complement'
        },
        {
          label: 'City',
          xs: 9,
          name: 'city'
        },
        {
          label: 'State',
          xs: 3,
          name: 'state'
        }
      ].map((field) => (
        <TextField
          {...field}
          key={field.name}
          value={addressState[field.name]}
          onChange={handleChangeField}
          disabled={fetchingPostcode}
        />
      ))}
    </Grid>
  )
}

FormAddress.propTypes = {
  onUpdate: t.func
}

function reducer (state, action) {
  if (action.type === 'UPDATE_FULL_ADDRESS') {
    return {
      ...state,
      ...action.payload,
      error: null
    }
  }

  if (action.type === 'UPDATE_FIELD') {
    return {
      ...state,
      [action.payload.name]: action.payload.value
    }
  }

  if (action.type === 'FAIL') {
    return {
      ...initialState,
      error: action.payload.error
    }
  }

  if (action.type === 'RESET') {
    return {
      initialState
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
