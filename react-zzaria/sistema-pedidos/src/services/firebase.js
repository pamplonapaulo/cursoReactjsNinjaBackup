import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyC5OErDyC2TwywKxaFFpu_Exi-6X2QaoCM',
  authDomain: 'pamplona-pizzas.firebaseapp.com',
  databaseURL: 'https://pamplona-pizzas.firebaseio.com',
  projectId: 'pamplona-pizzas',
  storageBucket: 'pamplona-pizzas.appspot.com',
  messagingSenderId: '165890800996',
  appId: '1:165890800996:web:5385484eb8cce4d6e78e71'
}
// Initialize Firebase
firebase.initializeApp(config)

export const db = firebase.firestore()
export default firebase
