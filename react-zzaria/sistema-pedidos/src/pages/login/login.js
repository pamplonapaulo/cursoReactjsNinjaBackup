import React, { useState, useContext, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Button, Grid } from '@material-ui/core'
import firebase from 'services/firebase'
import { ReactComponent as MainLogo } from './logo-react-zzaria.svg'

import { ColorContext } from 'app'

function Login () {
  const [useInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  })

  const { isUserLoggedIn, user } = useInfo

  const { color, setColor } = useContext(ColorContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('user data:', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [])

  const handleLogin = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }, [])

  const handleLogout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      console.log('logged out!')
      setUserInfo({
        isUserLoggedIn: false,
        user: null
      })
    })
  }, [])

  return (
    <Container>
      <Grid container justify='center' spacing={10}>
        <Grid item>
          <Logo />
        </Grid>

        <Grid item xs={12} container justify='center'>
          {isUserLoggedIn && (
            <>
              <pre>{user.displayName}</pre>
              <Button variant='contained' onClick={handleLogout}>Sair</Button>
            </>
          )}
          {!isUserLoggedIn && (
            <>
              <GitHubButton onClick={handleLogin}>Login with GitHub ({color})
              </GitHubButton>
              <button onClick={() => setColor('blue')}>Blue Color</button>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  padding: 5px;
`

const Logo = styled(MainLogo)`
  width: 100%;
`

const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  font-size: 25px;
  max-width: 480px;
  padding: 15px;
  text-transform: none;
`

export default Login
