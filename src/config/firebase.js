import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCz2DOJJWCO6HwnH97kcu2hxx0YuP4nszI",
  authDomain: "pesquisa-satisfacao-58ded.firebaseapp.com",
  projectId: "pesquisa-satisfacao-58ded",
  storageBucket: "pesquisa-satisfacao-58ded.appspot.com",
  messagingSenderId: "757065790061",
  appId: "1:757065790061:web:ea1c8da31e6c9ac86ac564",
  measurementId: "G-CXGTMT72X9",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;
