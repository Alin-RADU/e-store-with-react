import * as actionTypes from './actionTypes.js';

export const updateCollections = (collectionsMap) => {
  return {
    type: actionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap,
  };
};
