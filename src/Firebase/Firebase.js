import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB_MXlCO73KQftzsIPenCvw5pytM9LBYQQ",
  authDomain: "chat-messenger-5fb90.firebaseapp.com",
  databaseURL: "https://chat-messenger-5fb90.firebaseio.com",
  projectId: "chat-messenger-5fb90",
  storageBucket: "chat-messenger-5fb90.appspot.com",
  messagingSenderId: "1031210007585",
  appId: "1:1031210007585:web:54835cad472d0310f07760",
  measurementId: "G-SHLG2WVT62"
});

const db = firebaseApp.firestore();

export default db;