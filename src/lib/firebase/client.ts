import { initializeApp } from 'firebase/app';
import { Auth, connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, Firestore, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDVpBy3HxdK0WJcmJ1dY9izHr-XuTFE1jk',
  authDomain: 'playful-hand.firebaseapp.com',
  projectId: 'playful-hand',
  storageBucket: 'playful-hand.appspot.com',
  messagingSenderId: '580404138851',
  appId: '1:580404138851:web:3605062f0030badf3db956',
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const isEmulating = true;

export const initFirestore = (): Firestore => {
  const firestore: Firestore = getFirestore(app);

  if (isEmulating) {
    connectFirestoreEmulator(firestore, 'localhost', 8080);
  }
  return firestore;
};

export const initAuth = (): Auth => {
  const auth: Auth = getAuth(app);
  if (isEmulating) {
    connectAuthEmulator(auth, 'http://localhost:9099');
  }

  return auth;
};

export const firestore = initFirestore();
export const auth = initAuth();
