console.log("code tou filhal chal rha hai");
import { onAuthStateChanged, getAuth } from "./firebase/firebase.js";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
//    if user sign in
    const uid = user.uid;

    // ...
  } else {
    // if User is signed out
    const currentPath = location.pathname;
    window.location.href = "./firebase/login.html"

    // ...
    // aksljf
  }
});
