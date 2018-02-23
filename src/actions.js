import C from './constants'
import fetch from 'isomorphic-fetch'

export const searchResults = value => dispatch => {

    fetch('http://mercury.itv.com/api/json/dotcom/programme/searchatoz/' + value)
        .then(response => response.json())
        .then(searchResults => {

            console.log('got search results >>>> ', searchResults)
            dispatch({
                type: C.UPDATE_RESULTS,
                payload: searchResults.Result[0]
            })

        })
        .catch(error => {
            console.log('error fetching results .... ', error);
        })
}
