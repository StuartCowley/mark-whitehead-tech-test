import React from 'react';
import '../styles/SearchResults.css';
import PropTypes from 'prop-types';

function SearchResults(props) {
  const { searchResults } = props;

  if (!searchResults.length) {
    return <p className="search-results__no-results">Nothing to see here!</p>;
  } else
    return (
      <div className="search-results__outer-div">
        {searchResults.map((image) => (
          <div key={image} className="search-results__moon">
            <img className="card-image" src={image} alt="spaceImage" />
          </div>
        ))}
      </div>
    );
}

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.string),
};

export default SearchResults;
