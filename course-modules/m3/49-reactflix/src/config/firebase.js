'use strict'

import * as firebase from 'firebase/app'
import 'firebase/database'

firebase.initializeApp({
  apiKey: 'AIzaSyBnflJQBcb6pKBJIivxTd6SSOEYJxb7ah0',
  authDomain: 'meditation-tv.firebaseapp.com',
  databaseURL: 'https://meditation-tv.firebaseio.com',
  projectId: 'meditation-tv',
  storageBucket: 'meditation-tv.appspot.com',
  messagingSenderId: '360968358020',
  appId: '1:360968358020:web:85ef8b8546b5e1d72e5ad1',
  measurementId: 'G-7ST300CLZ5'
})

const db = firebase.database()

export { db }
