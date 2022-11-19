import { useState } from 'react';
import '../styles/app.css';
import Search from '../components/search';
import SearchResults from './SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="app">
      <img
        className="app__image"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      ></img>
      <Search setSearchResults={setSearchResults} />
      <SearchResults searchResults={searchResults} />
    </div>
  );
}

export default App;
