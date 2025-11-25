import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAefBelXDvrS4sXn8AqkSZwGZ5hg_H12j0",
  authDomain: "tiespro-c5b17.firebaseapp.com",
  projectId: "tiespro-c5b17",
  storageBucket: "tiespro-c5b17.firebasestorage.app",
  messagingSenderId: "422099679452",
  appId: "1:422099679452:web:ff38de974a808534c81c19",
  measurementId: "G-E088VSLQ35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and Analytics
const db = getFirestore(app);
let analytics = null;

// Analytics is only available in browser environments
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app);
  } catch (e) {
    console.warn("Firebase Analytics failed to initialize (likely blocked by browser extension):", e);
  }
}

export { db, analytics };