import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// ISI KODE API KEY DARI DASHBOARD FIREBASE KAMU DI SINI
const firebaseConfig = {
  apiKey: "PASTE_API_KEY_KAMU_DI_SINI",
  authDomain: "netmanager-rtrw.firebaseapp.com",
  projectId: "netmanager-rtrw",
  storageBucket: "netmanager-rtrw.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdefg123456"
};

// Mencegah inisialisasi ganda saat Next.js melakukan hot-reload
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
