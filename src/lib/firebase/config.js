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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};