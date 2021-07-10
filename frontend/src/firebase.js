import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyAVihggwV-iWKJDozK9eBa18N5tKeJqecg",
    authDomain: "login-d970e.firebaseapp.com",
    projectId: "login-d970e",
    storageBucket: "login-d970e.appspot.com",
    messagingSenderId: "499716605752",
    appId: "1:499716605752:web:37bb19df341143e8da63cd",
    measurementId: "G-MK64MTNLDX"
  };
  // Initialize Firebase
  const Fire=firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  

  export default Fire;