import { PropTypes } from 'react'
import ResultRow from './ResultRow'

const Results = ({ allSearchResults={} }) => {

    let results;
    if (allSearchResults.Details) {
        results = allSearchResults.Details.map((item, i) => {
            return (<ResultRow key={i} {...item} />);
        });
    }

    return (
        <div className="resultArea">
          {results}
        </div>
    )
}

Results.propTypes = {
    allSearchResults: PropTypes.object.isRequired
}

export default Results
