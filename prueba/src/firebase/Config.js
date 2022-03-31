
import { initializeApp } from "firebase/app";






// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBinXg07rkxeD7iGpo17BBHgaqYR9GHs-Y",
  authDomain: "ferreteria-f983c.firebaseapp.com",
  projectId: "ferreteria-f983c",
  storageBucket: "ferreteria-f983c.appspot.com",
  messagingSenderId: "662018754235",
  appId: "1:662018754235:web:0fe1e44f2009b007558b9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}
