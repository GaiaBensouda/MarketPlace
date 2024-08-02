import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBPMjQJ4-WWqIWZBFSghO_BzhC08RwslV4",
    authDomain: "marketplace-f6963.firebaseapp.com",
    projectId: "marketplace-f6963",
    storageBucket: "marketplace-f6963.appspot.com",
    messagingSenderId: "635256454536",
    appId: "1:635256454536:web:9935efefd1497a33018e3d",
    measurementId: "G-1JM914N8S9"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };