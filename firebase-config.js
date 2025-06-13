import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBdz67RC5QbQ6AXtEA25p1kkB_ilj3DGv8",
  authDomain: "arquitetos-sites.firebaseapp.com",
  projectId: "arquitetos-sites",
  storageBucket: "arquitetos-sites.appspot.com",
  messagingSenderId: "559470511905",
  appId: "1:559470511905:web:7a179abbeaf2411dc22060",
  measurementId: "G-05QJZJZL96",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
