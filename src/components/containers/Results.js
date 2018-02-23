import Results from '../ui/Results'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => 
  ({
    allSearchResults: state.allSearchResults
  })

export default connect(mapStateToProps)(Results)
