import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD2M5xKSlRq8yQteEat-n_0Jc6nk1fW8Y0',
  authDomain: 'airbnb-clone-with-typescript.firebaseapp.com',
  projectId: 'airbnb-clone-with-typescript',
  storageBucket: 'airbnb-clone-with-typescript.appspot.com',
  messagingSenderId: '755067052367',
  appId: '1:755067052367:web:f406129d66aa2c0419a53a',
  measurementId: 'G-DPMTVC2CNL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(app);
