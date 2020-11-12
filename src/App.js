import React from 'react';
import './App.css';
import AddMovie from './components/AddMovie';

import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={data} />
      <AddMovie />
    </div>
  );
}

export default App;
