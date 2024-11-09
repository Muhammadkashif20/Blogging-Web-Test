import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import{addDoc,collection } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyALTrNswGQeRCgg1zqoDMB_lJ5PhnHUSnw",
  apiKey: "AIzaSyALTrNswGQeRCgg1zqoDMB_lJ5PhnHUSnw",
  authDomain: "login-signup-3d9b8.firebaseapp.com",
  projectId: "login-signup-3d9b8",
  storageBucket: "login-signup-3d9b8.appspot.com",
  messagingSenderId: "772251804690",
  appId: "1:772251804690:web:a53da3c02b82e36e56a4cb"
};
const app = initializeApp(firebaseConfig);
console.log(app);
const auth = getAuth(app);
console.log(auth);
const db = getFirestore(app);
console.log(db); 
export{app,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut}
export{addDoc,collection}