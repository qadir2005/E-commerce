import { getAuth, createUserWithEmailAndPassword, } from "./firebase.js";

let emailInput = document.querySelector("#email")
let passwordInput = document.querySelector("#password")
let confirm = document.querySelector("#confirm")
let form = document.querySelector(".signUpform")


const auth = getAuth();


form.addEventListener("submit", (event)=>{
  event.preventDefault()
  
  if(confirm.value === passwordInput.value){
  const email = emailInput.value
  const password = passwordInput.value


  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    form.reset()
    window.location.href = "http://127.0.0.1:5500/index.html"
    alert("form submission is succesfullya")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // Sweet alert
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Email is already exits",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
        console.log(errorCode);
    console.log(errorMessage);
    // ..
  });
}else{
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Please Check your confirm Password ",
  });
}
  
})