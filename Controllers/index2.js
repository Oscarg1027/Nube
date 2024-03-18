import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'

import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification
  } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyByyOykaz4-8sLVO01LvIFWLxePyVt1nxs",
    authDomain: "letra-5046c.firebaseapp.com",
    projectId: "letra-5046c",
    storageBucket: "letra-5046c.appspot.com",
    messagingSenderId: "533494512492",
    appId: "1:533494512492:web:ccf3d981c5265f7ffd1149",
    measurementId: "G-P41RQLQV6T"
  };

  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

registro.addEventListener("click", (e)=> {
    var email = document.getElementById('emailreg').value;
    var password = document.getElementById('passwordreg').value;

    createUserWithEmailAndPassword(auth, email, password).then(cred => {
        alert("Usuario creado");
        sendEmailVerification(auth.currentUser).then(() => {
            alert('Se ha enviado un correo de verificación');
        });

    }).catch(error => {
        const errorCode = error.code;

        if(errorCode == 'auth/email-already-in-use')
            alert('el correo ya esta en uso');
        else if(errorCode == 'auth/invalid-email')
            alert('el correo no es válido');
        else if(errorCode == 'auth/weak-password')
            alert('la contraseña debe tener al menos 6 caracteres');
    });
});