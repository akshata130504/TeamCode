import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";  // ✅ Import Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVkmCd332D7vXCIwhiaOte7p0ZgxcYmYE",
  authDomain: "haxplore-dafe9.firebaseapp.com",
  projectId: "haxplore-dafe9",
  storageBucket: "haxplore-dafe9.appspot.com",
  messagingSenderId: "959959551696",
  appId: "1:959959551696:web:03283efe883e292d1958d5",
  measurementId: "G-NYTWFDNKST"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const firestore = getFirestore(app);
const rtdb = getDatabase(app);  // ✅ Initialize Realtime Database

// Set Auth Persistence
setPersistence(auth, browserLocalPersistence)
  .then(() => console.log("Firebase Auth Persistence Set to Local"))
  .catch((error) => console.error("Firebase Auth Persistence Error:", error));

export { auth, db, rtdb, firestore };
export default app;
