import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX6XG8jt8aXyXWCzKzMZHEP7XTuNVUJuc",
  authDomain: "auth-mern-stack-344f4.firebaseapp.com",
  projectId: "auth-mern-stack-344f4",
  storageBucket: "auth-mern-stack-344f4.appspot.com",
  messagingSenderId: "956415598987",
  appId: "1:956415598987:web:a3660f6a46b979c225cf8e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
