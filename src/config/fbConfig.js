import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDWE34UqYOVo-9uv9GfRn5nt88aaphU55o",
    authDomain: "ststopminimart.firebaseapp.com",
    databaseURL: "https://ststopminimart.firebaseio.com",
    projectId: "ststopminimart",
    storageBucket: "",
    messagingSenderId: "351650746373",
    appId: "1:351650746373:web:7baac8c4694717eb"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;