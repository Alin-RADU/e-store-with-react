import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyAQzQv5g7fafQFuUorr4f3dyOo69-O6LNg',
  authDomain: 'e-commerce-74c73.firebaseapp.com',
  databaseURL: 'https://e-commerce-74c73.firebaseio.com',
  projectId: 'e-commerce-74c73',
  storageBucket: 'e-commerce-74c73.appspot.com',
  messagingSenderId: '56984038698',
  appId: '1:56984038698:web:96ebe1e4634bb3454e4253',
  measurementId: 'G-K26PD3VL6C',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
