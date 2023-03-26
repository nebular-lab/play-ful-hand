import { FirebaseApp, getApps, initializeApp } from 'firebase/app';
import { Auth, browserSessionPersistence, getAuth, setPersistence } from 'firebase/auth';
import { connectFirestoreEmulator, Firestore, getFirestore } from 'firebase/firestore';

const isEmulating = true;

let app: FirebaseApp;
let auth: Auth;
let firestore: Firestore;
const initAuth = (app: FirebaseApp | undefined) => {
  const authInstance = getAuth(app);

  setPersistence(authInstance, browserSessionPersistence).catch((error) => {
    console.error('Error setting persistence:', error);
  });

  // if (isEmulating) {
  //   connectAuthEmulator(authInstance, 'http://localhost:9099');
  // }

  return authInstance;
};
if (typeof window !== 'undefined' && getApps().length === 0) {
  const firebaseConfig = {
    apiKey: 'AIzaSyDVpBy3HxdK0WJcmJ1dY9izHr-XuTFE1jk',
    authDomain: 'playful-hand.firebaseapp.com',
    projectId: 'playful-hand',
    storageBucket: 'playful-hand.appspot.com',
    messagingSenderId: '580404138851',
    appId: '1:580404138851:web:3605062f0030badf3db956',
  };

  app = initializeApp(firebaseConfig);

  auth = initAuth(app);

  firestore = getFirestore(app);

  if (isEmulating) {
    connectFirestoreEmulator(firestore, 'localhost', 8080);
  }
}

export { auth, firestore };
