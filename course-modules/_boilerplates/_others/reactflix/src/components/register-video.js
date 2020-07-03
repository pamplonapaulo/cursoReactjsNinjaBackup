'use strict'

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { registerVideo } from 'reducers/videos/action-creators'
import { closeRegisterVideo } from 'reducers/ui/action-creators'

const RegisterVideo = ({ onSubmit, onCloseRegisterVideo }) => (
  <Form onSubmit={onSubmit}>
    <h2>Include videos</h2>

    <label htmlFor='id'>Video's ID</label>
    <input type='text' id='id' name='id' />

    <label htmlFor='title'>Video's Title</label>
    <input type='text' id='title' name='title' />

    <ButtonClose type='ButtonClose' onClick={onCloseRegisterVideo} >&times;</ButtonClose>

    <button type='submit'>Submit</button>
  </Form>
)

const Form = styled.form`
  padding: 10px;
  position: relative;
`

const ButtonClose = styled.button`
  border-radius: 50%;
  font-size: 20px;
  height: 30px;
  line-height: 1;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
`

const mapDispatchToProps = (dispatch) => ({
  onSubmit: async (e) => {
    e.preventDefault()
    e.persist()

    const {
      id: { value: id },
      title: { value: title }
    } = e.target

    await dispatch(registerVideo({ id, title }))
    e.target.reset()
    e.target[0].focus()
  },

  onCloseRegisterVideo: () => dispatch(closeRegisterVideo())
})

export default connect(null, mapDispatchToProps)(RegisterVideo)
