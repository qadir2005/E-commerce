import { getAuth, signInWithEmailAndPassword   } from "./firebase.js";

const auth = getAuth();

let emailInput = document.querySelector("#email")
let passwordInput = document.querySelector("#password")
let form = document.querySelector("#login_form");

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let email = emailInput.value
    let password = passwordInput.value
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        form.reset()
        alert("form submit succesfully")
    window.location.href = "http://127.0.0.1:5500/index.html"
    // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });

})

console.log("The end");