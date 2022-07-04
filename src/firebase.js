// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1-Mqx0kdiR84RDLZedNpbW89iojvkmY8",
  authDomain: "vuelidate-task-td.firebaseapp.com",
  projectId: "vuelidate-task-td",
  storageBucket: "vuelidate-task-td.appspot.com",
  messagingSenderId: "980955659224",
  appId: "1:980955659224:web:017b4105ffd532776b50ad",
  measurementId: "G-N0W5WFD14X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);