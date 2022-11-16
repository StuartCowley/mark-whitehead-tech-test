import React, { useState } from 'react';
import '../styles/search.css';
import getImages from '../requests/getImages';

function Search(props) {
  const { setSearchResults } = props;
  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchResults(getImages(value));
  };

  return (
    <>
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
    </>
  );
}

export default Search;
