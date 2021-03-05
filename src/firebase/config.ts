import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB_2FFVy9LppAXiYee5bQ3VtHHjyMKHWcs",
    authDomain: "sql-demos-75e9a.firebaseapp.com",
    databaseURL: "https://sql-demos-75e9a-default-rtdb.firebaseio.com",
    projectId: "sql-demos-75e9a",
    storageBucket: "sql-demos-75e9a.appspot.com",
    messagingSenderId: "539438524236",
    appId: "1:539438524236:web:26110d3f1be6d3633591e9",
    measurementId: "G-2EKZ4MLE82"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log('firebase configurado')

  export default firebase.firestore();