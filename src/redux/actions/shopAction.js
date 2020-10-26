import * as actionTypes from './actionTypes.js';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../api/firebase/firebase';

export const fetchCollectionsStart = () => ({
  type: actionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFail = (errorMessage) => ({
  type: actionTypes.FETCH_COLLECTIONS_FAIL,
  payload: errorMessage,
});

export const fetchCollectionsAsync = () => (dispatch) => {
  const collectionRef = firestore.collection('collections');
  dispatch(fetchCollectionsStart());
  collectionRef
    .get()
    .then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch((error) => dispatch(fetchCollectionsFail(error.message)));
};
