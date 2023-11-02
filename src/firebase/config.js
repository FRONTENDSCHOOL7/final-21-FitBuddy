import { initializeApp } from 'firebase/app';
import { getFirestore, Timestamp } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAlQIw2Y6010w_k9EDvSsr-wBqgoGtzJYk',
  authDomain: 'fitbuddy-4814d.firebaseapp.com',
  projectId: 'fitbuddy-4814d',
  storageBucket: 'fitbuddy-4814d.appspot.com',
  messagingSenderId: '1040758901141',
  appId: '1:1040758901141:web:f905b9b4b88825b9ae0e9c',
  measurementId: 'G-JV69YFB6BX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firestore 초기화
const appFireStore = getFirestore(app);
// 인증 초기화
const appAuth = getAuth();

const timestamp = Timestamp;

export { appFireStore, appAuth, timestamp };
