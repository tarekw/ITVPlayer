import C from '../constants'
import { combineReducers } from 'redux'

// export const errors = (state=[], action) => {
//   switch(action.type) {
//     case C.ADD_ERROR :
//     	return [
//          ...state,
//          action.payload
//     	]
//     case C.CLEAR_ERROR :
//       return state.filter((message, i) => i !== action.payload)
//   	default:
//   		return state
//   }
// }

export const updateSearchResults = (state=[], action) => {

  switch(action.type) {

    case C.UPDATE:
      return state;

    default:
      return state;
  }

};

export const fetching = (state=false, action) => {

  switch(action.type) {

    case C.FETCH_SEARCH_RESULTS:
      return true;

    case C.CANCEL_FETCHING:
      return false;

    // case C.CHANGE_SUGGESTIONS :
    //   return false;

    default:
      return state
  }

};

export default combineReducers({
  updateSearchResults,
  // errors,
  fetching
});




