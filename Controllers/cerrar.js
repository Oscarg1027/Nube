import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'
import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'

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

const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
        alert('Sesión cerrada');
    }).catch((error) => {
        alert('Error al cerrar sesión');
    });
});