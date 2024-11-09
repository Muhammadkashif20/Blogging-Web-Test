import { app,auth,signInWithEmailAndPassword } from "./firebase.mjs";
let loginBtn=document.getElementById('loginBtn');
loginBtn.addEventListener('click',()=>{
    
    let loginEmail=document.getElementById('loginEmail')
    let loginPassword=document.getElementById('loginPassword')
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
      const user = userCredential.user;
      alert('Your Account is Login SuccessFully!')
      console.log(user);
      window.location.href='index.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      alert('Try Again!')
      alert(errorCode)
      const errorMessage = error.message;
      console.log(errorMessage);
      
    });
})
