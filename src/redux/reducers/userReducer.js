import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER_NULL:
      return {
        ...state,
        currentUser: null,
      };
    case actionTypes.SET_CURRENT_USER_SUCCESS:
    case actionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case actionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null,
      };
    case actionTypes.GOOGLE_SIGN_IN_FAIL:
    case actionTypes.EMAIL_SIGN_IN_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
