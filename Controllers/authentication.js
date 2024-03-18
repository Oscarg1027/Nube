import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'

import { 
    getAuth,
    signInWithEmailAndPassword  
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



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

logBtn.addEventListener('click', (e) => {
    var email = document.getElementById('user').value;
    var password = document.getElementById('con').value;

    signInWithEmailAndPassword(auth, email, password).then(cred => {
        alert("Usuario logueado");
        console.log(cred.user);
    }).catch(error => {
        const errorCode = error.code;

        if(errorCode == 'auth/invalid-email')
            alert('el correo no es valido');
        else if(errorCode == 'auth/user-disabled')
            alert('el usuario ha sido desahabilitado');
        else if(errorCode == 'auth/user-not-found')
            alert('el usuario no existe');
        else if(errorCode == 'auth-wrong-password')
            alert('Contraseña incorrecta');
    });
});

atrasbtn.addEventListener('click', (e) => {
    auth.signOut().then(() => {
        alert('Sesión cerrada');
    }).catch((error) =>{+
        alert('Error al cerrar sesión');
    });
})

auth.onAuthStateChanged(user => {
    if(user){
        console.log("Usuario Activo");
        var email = user.emailVerified;
        if(email){
            window.open("/Templates/home.html")

        }else{
            auth.signOut();

        }
    }else{
        console.log("Usuario Inactivo");
    }

});