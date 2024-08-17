import { auth, app } from "./firebase.mjs";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

//* =============Get id==============
let emaillog = document.getElementById("inpEmail")
let passlog = document.getElementById("inpPass")
let btnlogin = document.getElementById("btnlog")

btnlogin.addEventListener(  "click",function(){
    signInWithEmailAndPassword(auth, emaillog.value, passlog.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    Swal.fire({
        title: "Good job!",
        text: "Wellcome Blog web!",
        icon: "success"
      });
      window.location.replace("/htmlfile/dashboard.html")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //...
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorCode,
        text: errorMessage,
      });
    });
    emaillog.value = "" 
    passlog.value  = ""
})
