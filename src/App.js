import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.state = {
      barra: '',
      fav: false,
      genero: '',
    };
  }
  onSearchTextChange(event) {
    this.setState({ barra: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ fav: event.target.checked });
  }

  onSelectedGenreChange(event) {
    this.setState({ genero: event.target.value });
  }

  render() {
    const b = this.state.barra;
    const f = this.state.fav;
    const n = this.state.genero;
    const t = this.onSearchTextChange;
    const k = this.onBookmarkedChange;
    const g = this.onSelectedGenreChange;
    return (
      <div className="App">
        <Header />
        <SearchBar searchText={b} onSearchTextChange={t} bookmarkedOnly={f} onBookmarkedChange={k} selectedGenre={n} onSelectedGenreChange={g} />
      </div>
    );
  }
}

export default App;
