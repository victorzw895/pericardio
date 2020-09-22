// config/fire-config.js
import firebase from "firebase";

const apiKey = process.env.REACT_APP_FB_API_KEY;
const authDomain = process.env.REACT_APP_FB_AUTH_DOMAIN;
const databaseURL = process.env.REACT_APP_FB_DATABASE_URL;
const projectId = process.env.REACT_APP_FB_PROJECT_ID;
const storageBucket = process.env.REACT_APP_FB_STORAGE_BUCKET;
const messagingSenderId = process.env.REACT_APP_FB_MESSAGING_SENDER_ID;
const appId = process.env.REACT_APP_FB_APP_ID;
const measurementId = process.env.REACT_APP_FB_MEASUREMENT_ID;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
const fire = firebase;
export default fire;
