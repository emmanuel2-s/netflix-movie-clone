// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC6D35mjQcGfzqIgD_oUS91UxT_-tCoDes",
//   authDomain: "moviemaze-react.firebaseapp.com",
//   projectId: "moviemaze-react",
//   storageBucket: "moviemaze-react.appspot.com",
//   messagingSenderId: "986536352761",
//   appId: "1:986536352761:web:329bb650c5fb80f163bb28",
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
//   authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER,
//   appId: import.meta.env.VITE_REACT_APP_APP_ID,
// };

// console.log("first", import.meta.env.REACT_APP_API_KEY);
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC6D35mjQcGfzqIgD_oUS91UxT_-tCoDes",
//   authDomain: "moviemaze-react.firebaseapp.com",
//   projectId: "moviemaze-react",
//   storageBucket: "moviemaze-react.appspot.com",
//   messagingSenderId: "986536352761",
//   appId: "1:986536352761:web:329bb650c5fb80f163bb28"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
