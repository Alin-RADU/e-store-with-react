import { auth, createUserProfileDocument } from '../../api/firebase/firebase';

import * as actionTypes from './actionTypes';

////////////////////

export const setCurrentUserStart = () => ({
  type: actionTypes.SET_CURRENT_USER_START,
});

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

////////////////////

export const googleSignInStart = () => ({
  type: actionTypes.GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = (userCredentials) => ({
  type: actionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: userCredentials,
});

export const googleSignInFail = (errorMessage) => ({
  type: actionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: errorMessage,
});

export const googleSignInAsync = () => (dispatch) => {};

////////////////////

export const emailSignInStart = () => ({
  type: actionTypes.EMAIL_SIGN_IN_START,
});

export const emailSignInSuccess = (userCredentials) => ({
  type: actionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: userCredentials,
});

export const emailSignInFail = (errorMessage) => ({
  type: actionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: errorMessage,
});

export const emailSignInAsync = () => (dispatch) => {};
