import SearchInput from '../ui/SearchInput'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { searchResults } from '../../actions'

const mapStateToProps = (state, props) => 
	({
		allSearchResults: state.allSearchResults
	})

const mapDispatchToProps = dispatch => 
	({
		onChange(value) {
			if (value) {
				dispatch(
					searchResults(value)
				)
			} else {
				// dispatch(
				// 	clearSuggestions()
				// )
			}
		},
	})	

const Container = connect(mapStateToProps, mapDispatchToProps)(SearchInput)

export default withRouter(Container)
