// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyClEEzzkMg6xhO4PmMQ95EfizJIZVgz5VU",
    authDomain: "first-web-application-4c379.firebaseapp.com",
    projectId: "first-web-application-4c379",
    storageBucket: "first-web-application-4c379.appspot.com",
    messagingSenderId: "406855629121",
    appId: "1:406855629121:web:150d092245153f7672c9c0",
    measurementId: "G-BNTBFZE031"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, ref, uploadBytesResumable, getDownloadURL };
