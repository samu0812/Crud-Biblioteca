// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDk6sN-2kcEB1JG0E7kspWScqcfxedH8Zg",
  authDomain: "crud-biblioteca-16226.firebaseapp.com",
  projectId: "crud-biblioteca-16226",
  storageBucket: "crud-biblioteca-16226.appspot.com",
  messagingSenderId: "285719353740",
  appId: "1:285719353740:web:d7e64aa5e0bf5303c81ea9",
  measurementId: "G-W3PRKVBWG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)