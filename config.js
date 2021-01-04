import firebase from 'firebase';

require('@firebase/firestore');
//import 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyBRQiGEvRLZqdRwj0aQQfjFT0NQzf55mJI",
  authDomain: "booksanta-d92a5.firebaseapp.com",
  databaseURL: "https://booksanta-d92a5-default-rtdb.firebaseio.com",
  projectId: "booksanta-d92a5",
  storageBucket: "booksanta-d92a5.appspot.com",
  messagingSenderId: "959382606717",
  appId: "1:959382606717:web:baba4c16d5924533d43214"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();