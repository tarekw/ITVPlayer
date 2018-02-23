import { PropTypes } from 'react'

const SearchInput = ({ results=[], onChange=f=>f}) => {

    let _searchInput;

    return (
        <div className="header">
            <br/>
            <input className="searchbox form-control"
                   placeholder='enter your search term'
                   ref={input => _searchInput = input}
                   onChange={() => onChange(_searchInput.value)}>
            </input>
        </div>
    )
}

export default SearchInput