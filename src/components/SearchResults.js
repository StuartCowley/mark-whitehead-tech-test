import React from 'react';
import '../styles/SearchResults.css';

function SearchResults(props) {
  const { searchResults } = props;

  if (!searchResults.length) {
    return <p className="search-results__no-results">Nothing to see here!</p>;
  } else
    return (
      <div className="search-results__outer-div">
        {searchResults.map((image) => (
          <div className="search-results__moon">
            <img className="card-image" src={image} alt="spaceImage" />
          </div>
        ))}
      </div>
    );
}

export default SearchResults;
