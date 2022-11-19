import React, { useState } from 'react';
import '../styles/search.css';
import getImages from '../requests/getImages';
import PropTypes from 'prop-types';

function Search(props) {
  const { setSearchResults } = props;
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };

  return (
    <>
      <div className="search-form__outer-div">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            placeholder="Choose your planet!"
            onChange={(e) => setValue(e.target.value)}
            className="search-input"
            type="text"
          />
          <button className="search-btn" type="submit">
            Go!
          </button>
        </form>
      </div>
    </>
  );
}

Search.propTypes = {
  setSearchResults: PropTypes.func,
};

export default Search;
