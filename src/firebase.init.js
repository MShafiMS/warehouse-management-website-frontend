// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR9CD2v1zMnMOhxCuGYXM79S2c9M3pABU",
  authDomain: "warehose-management-website.firebaseapp.com",
  projectId: "warehose-management-website",
  storageBucket: "warehose-management-website.appspot.com",
  messagingSenderId: "1063301851085",
  appId: "1:1063301851085:web:472da83302e2a4b7f5c684"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;