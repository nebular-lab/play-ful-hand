import { ServiceAccount } from 'firebase-admin';
import { cert, getApp, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccountKey = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string,
) as ServiceAccount;

if (!getApps()?.length) {
  initializeApp({
    credential: cert(serviceAccountKey),
    databaseURL: 'localhost:8080',
  });
}

export const adminDB = getFirestore();
export const adminApp = getApp();
