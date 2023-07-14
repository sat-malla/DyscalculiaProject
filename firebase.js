import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPxbQ6pLzrXYd9LoXulY3RZZT2EwianA8",
  authDomain: "dyscalculiaapp-104c4.firebaseapp.com",
  projectId: "dyscalculiaapp-104c4",
  storageBucket: "dyscalculiaapp-104c4.appspot.com",
  messagingSenderId: "48465264244",
  appId: "1:48465264244:web:5e49ed6a078b4746f29b21",
  measurementId: "G-R838VW6KL8"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();

export { db };