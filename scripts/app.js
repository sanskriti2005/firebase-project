// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    authDomain: "fir-learning-7944f.firebaseapp.com",
    projectId: "fir-learning-7944f",
    storageBucket: "fir-learning-7944f.firebasestorage.app",
    messagingSenderId: "189930966808",
    appId: "1:189930966808:web:eb1da3a53630e419d7186d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const form = document.getElementById("sign-up")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = form.email.value
    const password = form.password.value
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log(res)
            console.log(res.user)
        })
        .catch((err) => {
            alert("There was an error with authentication")
            console.log(err)
        })
})



