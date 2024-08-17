  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAuth  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD3AMi3u5Qwv11z7tlUP6qcs9wZiMw2I3A",
    authDomain: "task-project-c94df.firebaseapp.com",
    projectId: "task-project-c94df",
    storageBucket: "task-project-c94df.appspot.com",
    messagingSenderId: "417078899457",
    appId: "1:417078899457:web:c83c679a9e86c17eb0a100",
    measurementId: "G-D6E0R7VF31"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

  