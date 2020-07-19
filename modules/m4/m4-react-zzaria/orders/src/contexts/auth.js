import React, { createContext, useCallback, useState } from 'react'
import t from 'prop-types'
import firebase from 'services/firebase'

const AuthContext = createContext()

function AuthProvider ({ children }) {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  })

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
    <AuthContext.Provider value={{ handleLogin, handleLogout, userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: t.node.isRequired
}

export { AuthProvider, AuthContext }
