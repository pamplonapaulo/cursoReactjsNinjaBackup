'use strict'

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const RegisterVideo = ({onSubmit}) => (
  <Form onSubmit={onSubmit}>
    <h2>Include videos</h2>

    <label htmlFor='id'>Video's ID</label>
    <input type='text' id='id' name='id' />

    <label htmlFor='title'>Video's Title</label>
    <input type='text' id='title' name='title' />

    <button type='submit'>Submit</button>
  </Form>
)

const Form = styled.form`
  padding: 10px;
`

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (e) => {
    e.preventDefault()
    dispatch({
      type: 'videos:ADD_VIDEO',
      payload: {
        id: '12345',
        title: 'Test Aula'
      }
    })
  }
})

export default connect(null, mapDispatchToProps)(RegisterVideo)
