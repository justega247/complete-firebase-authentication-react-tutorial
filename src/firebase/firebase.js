import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase
const devConfig = {
  apiKey: "AIzaSyB3KQdgk0fV57phocsvYmd-bhrjMulGUKg",
  authDomain: "fir-react-auth-5043a.firebaseapp.com",
  databaseURL: "https://fir-react-auth-5043a.firebaseio.com",
  projectId: "fir-react-auth-5043a",
  storageBucket: "fir-react-auth-5043a.appspot.com",
  messagingSenderId: "352849954320"
};

const prodConfig = {
  apiKey: "AIzaSyDCk6t2_vdhw030hfhj3sMvJlxt8ecNioY",
  authDomain: "fir-react-auth2.firebaseapp.com",
  databaseURL: "https://fir-react-auth2.firebaseio.com",
  projectId: "fir-react-auth2",
  storageBucket: "fir-react-auth2.appspot.com",
  messagingSenderId: "720170753984"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
