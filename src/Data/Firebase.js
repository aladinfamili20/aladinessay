import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyD2zEqdc7jhCEzIVq2hkdBRRTQm2MNV5vQ",
    authDomain: "aladinwritings.firebaseapp.com",
    projectId: "aladinwritings",
    storageBucket: "aladinwritings.appspot.com",
    messagingSenderId: "356123083395",
    appId: "1:356123083395:web:356ddfd0f625d36bc811b6"
};
 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
