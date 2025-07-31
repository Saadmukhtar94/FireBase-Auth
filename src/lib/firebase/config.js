// // src/lib/firebase/config.js
// import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "YOUR-API-KEY",
//   authDomain: "your-app.firebaseapp.com",
//   projectId: "your-app",
//   storageBucket: "your-app.appspot.com",
//   messagingSenderId: "YOUR-SENDER-ID",
//   appId: "YOUR-APP-ID"
// };

// // ✅ Initialize and export app
// const app = initializeApp(firebaseConfig);
// export { app };




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYXrvmdp17zzUnWpyzXTmc5SPklvE764g",
  authDomain: "fir-auth-cf734.firebaseapp.com",
  projectId: "fir-auth-cf734",
  storageBucket: "fir-auth-cf734.firebasestorage.app",
  messagingSenderId: "857406555857",
  appId: "1:857406555857:web:62e68fcd4421642399a7f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};