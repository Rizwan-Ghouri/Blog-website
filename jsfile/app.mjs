import { auth, app } from "./firebase.mjs";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

//* =============Get id==============
let userEmail = document.getElementById("inpEmail")
let userPass = document.getElementById("inpPass")
let btnAcc = document.getElementById("btnAcc")

// const auth = getAuth();

btnAcc.addEventListener("click",function(){
  createUserWithEmailAndPassword(auth, userEmail.value, userPass.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    window.location.replace("htmlfile/login.html")
    Swal.fire({
      title: "Good job!",
      text: "Account successfully!",
      icon: "success"
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
    Swal.fire({
      icon: "error",
      title: "Error",
      text: errorCode,
      text: errorMessage,
    });
  })
   userEmail.value = "" 
    userPass.value  = ""
})

