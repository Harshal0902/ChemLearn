import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyD4JQ7ZBDgYwuD5_ReDoS5C4zWI2iwNpOQ",
  authDomain: "chemlearn-51dd5.firebaseapp.com",
  projectId: "chemlearn-51dd5",
  storageBucket: "chemlearn-51dd5.appspot.com",
  messagingSenderId: "186479867437",
  appId: "1:186479867437:web:72b440462253904830aaa4",
  measurementId: "G-4QPXNK80D9"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export { firestore, auth }