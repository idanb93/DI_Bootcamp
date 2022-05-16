import './App.css';
import React from 'react';
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Redux Movies</h1>
          <div id='main-container'>
            <div id='left-container'>
              <MovieList />
            </div>
            <div id='right-container'>
              <MovieDetails />
            </div>
          </div>
        </header>
      </div>
    );

  }
}

export default App;
