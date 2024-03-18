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

//metodo de inicio de sesión
export const loginvalidation=(email,password)=>
  signInWithEmailAndPassword(auth, email, password)