import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBztExy8p4YzVjMqA2DyBgLUDHJKdIECxQ",
  authDomain: "fir-x-react-d7d96.firebaseapp.com",
  projectId: "fir-x-react-d7d96",
  storageBucket: "fir-x-react-d7d96.appspot.com",
  messagingSenderId: "308395467214",
  appId: "1:308395467214:web:57edd6992d8c781fa20b9f",
  measurementId: "G-W0N7S0VXN7"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()