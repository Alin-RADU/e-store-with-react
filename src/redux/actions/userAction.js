import { auth, createUserProfileDocument } from '../../api/firebase/firebase';

import * as actionTypes from './actionTypes';

////////////////////

export const setCurrentUserNull = (userCredentials) => ({
  type: actionTypes.SET_CURRENT_USER_NULL,
  payload: userCredentials,
});

export const setCurrentUserSuccess = (userCredentials) => ({
  type: actionTypes.SET_CURRENT_USER_SUCCESS,
  payload: userCredentials,
});

export const setCurrentUserFail = (errorMessage) => ({
  type: actionTypes.SET_CURRENT_USER_FAIL,
  payload: errorMessage,
});

export const setCurrentUserAsync = () => async (dispatch) => {
  await auth.onAuthStateChanged(async (userCredentials) => {
    if (userCredentials) {
      const userRef = await createUserProfileDocument(userCredentials);
      userRef.onSnapshot((snapShot) => {
        const userCredentials = {
          id: snapShot.id,
          ...snapShot.data(),
        };
        dispatch(setCurrentUserSuccess(userCredentials));
      });
    }
    dispatch(setCurrentUserNull(userCredentials));
  });
};
