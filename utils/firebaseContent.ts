import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { get, getDatabase, ref, set } from "firebase/database";

import { AdminContent } from "./adminContent";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const FIREBASE_CONTENT_PATH = "siteContent";

export const isFirebaseConfigured = () =>
  Boolean(
    firebaseConfig.apiKey &&
      firebaseConfig.authDomain &&
      firebaseConfig.databaseURL &&
      firebaseConfig.projectId &&
      firebaseConfig.appId,
  );

const getFirebaseApp = () => {
  if (!isFirebaseConfigured()) return null;
  return getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
};

const getFirebaseDatabase = () => {
  const app = getFirebaseApp();
  if (!app) return null;
  return getDatabase(app);
};

const getFirebaseAuth = () => {
  const app = getFirebaseApp();
  if (!app) return null;
  return getAuth(app);
};

export const fetchFirebaseContent = async (): Promise<Partial<AdminContent>> => {
  const db = getFirebaseDatabase();
  if (!db) {
    throw new Error("Firebase env vars are missing or incomplete.");
  }

  const snapshot = await get(ref(db, FIREBASE_CONTENT_PATH));
  return snapshot.exists() ? snapshot.val() : {};
};

export const saveFirebaseContent = async (content: AdminContent) => {
  const db = getFirebaseDatabase();
  if (!db) {
    throw new Error("Firebase is not configured");
  }

  await set(ref(db, FIREBASE_CONTENT_PATH), content);
};

export const signInFirebaseAdmin = async (email: string, password: string) => {
  const auth = getFirebaseAuth();
  if (!auth) {
    throw new Error("Firebase is not configured");
  }

  await signInWithEmailAndPassword(auth, email, password);
};

export const signOutFirebaseAdmin = async () => {
  const auth = getFirebaseAuth();
  if (!auth) return;
  await signOut(auth);
};

export const subscribeToFirebaseAdmin = (
  callback: (user: User | null) => void,
) => {
  const auth = getFirebaseAuth();
  if (!auth) {
    callback(null);
    return () => {};
  }

  return onAuthStateChanged(auth, callback);
};
