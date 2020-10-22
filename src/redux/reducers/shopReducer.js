import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  collections: null,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };

    default:
      return state;
  }
};
