import '../styles/app.css';
import Search from '../components/search';

function App() {
  return (
    <div className="app">
      <img
        className="app__image"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="Nasa Logo"
      ></img>
      <Search />
    </div>
  );
}

export default App;
