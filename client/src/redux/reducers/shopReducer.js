import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: '',
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_COLLECTIONS:
      return {
        ...state,
        collections: null,
      };

    case actionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };

    case actionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      };
    case actionTypes.FETCH_COLLECTIONS_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
