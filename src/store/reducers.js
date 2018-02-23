import C from '../constants'
import { combineReducers } from 'redux'

export const allSearchResults = (state=[], action) => {

  switch(action.type) {

    case C.UPDATE_RESULTS:
      return action.payload;

    default:
      return state;
  }

};

export default combineReducers({
  allSearchResults
});




