import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBLidmgV0SP9OdcYMqksnoOnicumIzKyyw",
  authDomain: "crapper-keeper.firebaseapp.com",
  databaseURL: "https://crapper-keeper.firebaseio.com",
  projectId: "crapper-keeper",
  storageBucket: "crapper-keeper.appspot.com",
  messagingSenderId: "574852937709",
  appId: "1:574852937709:web:5e235901c0ae96a9"
});

export default firebase;
