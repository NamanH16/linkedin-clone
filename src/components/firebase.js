import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCkBxOhVk5A4K8EOMn_fFOW7BIdyTQvvQU",
  authDomain: "linkedin-clone-c2bcd.firebaseapp.com",
  projectId: "linkedin-clone-c2bcd",
  storageBucket: "linkedin-clone-c2bcd.appspot.com",
  messagingSenderId: "100121363714",
  appId: "1:100121363714:web:ad1e94399e868a2f3a6e1b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};

