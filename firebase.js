import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtOlAk4Lhv1DAbYwoJ2Cc8m5vXbhTGVLc",
  authDomain: "my-amzn-e75a1.firebaseapp.com",
  projectId: "my-amzn-e75a1",
  storageBucket: "my-amzn-e75a1.appspot.com",
  messagingSenderId: "627542191465",
  appId: "1:627542191465:web:43b8185e7c26a73ed6e1f8",
  measurementId: "G-52PF2WKV7B",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
