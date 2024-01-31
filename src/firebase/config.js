import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDnF5nQ2LLwpirFB8Vikoofef4PpjZLmUY",
    authDomain: "ecommerce-423f6.firebaseapp.com",
    projectId: "ecommerce-423f6",
    storageBucket: "ecommerce-423f6.appspot.com",
    messagingSenderId: "410409581344",
    appId: "1:410409581344:web:ac25065c7de78643467545",
    measurementId: "G-YGNL87RXM6"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };