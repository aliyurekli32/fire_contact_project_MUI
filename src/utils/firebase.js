
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.RAECT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.RAECT_APP_PROJECTID,
  storageBucket: process.env.RAECT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.RAECT_APP_MESSAGINGSENDERID,
  appId: process.env.RAECT_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;