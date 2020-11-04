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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date().toString();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
      console.log('date-', createdAt.toString());
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
