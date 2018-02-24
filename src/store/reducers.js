import C from '../constants'
import { combineReducers } from 'redux'

export const allSearchResults = (state=[], action) => {

  switch(action.type) {

    case C.UPDATE_RESULTS:
      return action.payload;

    case C.CLEAR_RESULTS:
      return {
        Details: []
      };

    default:
      return state;
  }

};

export default combineReducers({
  allSearchResults
});




