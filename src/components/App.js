import { useState } from 'react';
import '../styles/app.css';
import Search from '../components/search';
import SearchResults from './SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="app">
      <div className="app__image-box">
        <img
          className="app__image"
          src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
          alt="nasaLogo"
        ></img>
        <p className="app__text">Planet Image Search Engine</p>
      </div>
      <Search setSearchResults={setSearchResults} />
      <SearchResults className="search-results" searchResults={searchResults} />
    </div>
  );
}

export default App;
