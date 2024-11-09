import { app,auth,createUserWithEmailAndPassword } from "./firebase.mjs";
let createBtn=document.getElementById('createAccBtn')
createBtn.addEventListener('click',()=>{
    let email=document.getElementById('email')
    let password=document.getElementById('password')
   createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        const user = userCredential.user;
        alert('Your Account Is Created SuccessFully!')
        console.log(user);
        window.location.href='login.html'
    })
    .catch((error) => {
        const errorCode = error.code;
        alert('Try Again!')
        alert(errorCode);
        const errorMessage = error.message;
        
    })
})