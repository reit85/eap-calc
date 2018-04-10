import * as firebase from 'firebase';
// import moment from 'moment';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

// Google Provider
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// ref = Table or collection
const db = firebase.database();
export { firebase, googleAuthProvider, db as default };
