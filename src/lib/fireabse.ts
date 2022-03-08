import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCF6k5DVMZ-Do-KWO8zfGmmES61Kw_laDA",
  authDomain: "nativeapp-a429a.firebaseapp.com",
  projectId: "nativeapp-a429a",
  storageBucket: "nativeapp-a429a.appspot.com",
  messagingSenderId: "489523799307",
  appId: "1:489523799307:web:13ea476dfda835c8182e0e"
};

let app 

if (getApps().length) {
  app = getApp()
} else {
  app = initializeApp(firebaseConfig);
}

export const auth = getAuth()
export const firestore = getFirestore()
export const googleProvider = new GoogleAuthProvider()