import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDfGmyLTO5iFwrozI4RmxRll-6ydQPAVW0",
    authDomain: "docs-dff7a.firebaseapp.com",
    projectId: "docs-dff7a",
    storageBucket: "docs-dff7a.appspot.com",
    messagingSenderId: "277516619955",
    appId: "1:277516619955:web:4238dd291458d5aae860c6"
  };

const app =  !firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app(); 

const db = app.firestore();

export {db}