import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import useStore from '../store';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const firebaseClient = initializeApp(firebaseConfig);

const auth = getAuth(firebaseClient);

const provider = new GoogleAuthProvider();

export default async function googleSignIn() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      useStore.getState().setUser(user);
      document.location.pathname = '/algeria';
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}
