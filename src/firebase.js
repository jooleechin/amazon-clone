import firebase from 'firebase'

// Settings -> Project settings -> config -> copy the config
const firebaseConfig = {
      apiKey: "AIzaSyBZqjVbctElegn88WefdLy5N9qx-WrHr8Q",
      authDomain: "clone-19087.firebaseapp.com",
      databaseURL: "https://clone-19087.firebaseio.com",
      projectId: "clone-19087",
      storageBucket: "clone-19087.appspot.com",
      messagingSenderId: "84014886422",
      appId: "1:84014886422:web:0d0f65cdffe1ead1264f37",
      measurementId: "G-HHH87PPLDK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }