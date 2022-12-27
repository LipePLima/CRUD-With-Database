// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { getAnalytics  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
    apiKey: "AIzaSyBF-RL0jgkyY-vJM9ztjCv00L0yLFGHHqU",
    authDomain: "crud-with-database.firebaseapp.com",
    databaseURL: "https://crud-with-database-default-rtdb.firebaseio.com",
    projectId: "crud-with-database",
    storageBucket: "crud-with-database.appspot.com",
    messagingSenderId: "91317888354",
    appId: "1:91317888354:web:fe9cbd8c473768e7b0f83b",
    measurementId: "G-0Z3KXPTSK7"
}
    
// Initialize Firebase
const app       = initializeApp(firebaseConfig);
const db        = getFirestore(app);
const analytics = getAnalytics(app);