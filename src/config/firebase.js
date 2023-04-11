// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBztExy8p4YzVjMqA2DyBgLUDHJKdIECxQ",
  authDomain: "fir-x-react-d7d96.firebaseapp.com",
  projectId: "fir-x-react-d7d96",
  storageBucket: "fir-x-react-d7d96.appspot.com",
  messagingSenderId: "308395467214",
  appId: "1:308395467214:web:57edd6992d8c781fa20b9f",
  measurementId: "G-W0N7S0VXN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);