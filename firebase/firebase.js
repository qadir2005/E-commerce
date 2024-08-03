  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
   } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js';
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBmz3VwayFkM8PHAFlBQe8XK8XoJQSNoYc",
    authDomain: "e-commerce-27840.firebaseapp.com",
    projectId: "e-commerce-27840",
    storageBucket: "e-commerce-27840.appspot.com",
    messagingSenderId: "79829629067",
    appId: "1:79829629067:web:af49015a5f17e3f113bc8e",
    measurementId: "G-HJ8ZWC5TBB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export{
    initializeApp,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
  }