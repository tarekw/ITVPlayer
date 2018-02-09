import C from '../constants'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {

	let result;

	console.groupCollapsed(`dispatching action => ${action.type}`);
	result = next(action);

	let { updateSearchResults, fetching } = store.getState();

	console.log(`

		search results: ${updateSearchResults.length}
		fetching: ${fetching}

	`);

	console.groupEnd();

	return result

};

export default (initialState={}) => {
	return applyMiddleware(thunk,consoleMessages)(createStore)(appReducer, initialState)
}



