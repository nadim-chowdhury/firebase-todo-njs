import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxefgK98CMZXeUrft-ZN9LEMk0CFeBLls",
  authDomain: "todo-app-njs.firebaseapp.com",
  projectId: "todo-app-njs",
  storageBucket: "todo-app-njs.appspot.com",
  messagingSenderId: "345186504772",
  appId: "1:345186504772:web:98499fe4e9c53142996c11",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
