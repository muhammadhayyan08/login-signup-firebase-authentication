import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnI3CYkAOMZruX42tpi4Hsc73vLZvyfAk",
  authDomain: "login-singup-24e09.firebaseapp.com",
  projectId: "login-singup-24e09",
  storageBucket: "login-singup-24e09.firebasestorage.app",
  messagingSenderId: "624477440417",
  appId: "1:624477440417:web:bf3fa897d5f9fd1730e3e0Y",
  databaseURL: "https://login-singup-24e09-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);

export default firebaseAuth;