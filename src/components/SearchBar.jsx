import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      onBookmarkedChange,
      bookmarkedOnly,
      onSelectedGenreChange,
      searchText, 
      onSearchTextChange, 
      selectedGenre
     } = this.props;
  return (
           <form data-testid="search-bar-form">
            <div>
              <label htmlFor="text-input"data-testid="text-input-label">
              Inclui o texto:
              </label>
              <input 
                name="text-input"
                type="text" 
                value={searchText} 
                data-testid="text-input" 
                onChange={onSearchTextChange}/>
            </div>
            <div>
              <label htmlFor="checkbox-input"data-testid="checkbox-input-label">
                Mostrar somente favoritos
              </label>
              <input 
                name ="checkbox-input"
                type="checkbox" 
                checked={bookmarkedOnly} 
                onChange={onBookmarkedChange} 
                data-testid="checkbox-input"/>
            </div>
            <div>
              <label htmlFor="genre-input"ata-testid="select-input-label">
              Filtrar por gênero
              </label>
              <select 
                name="genre-input" 
                value={selectedGenre} 
                onChange={onSelectedGenreChange} 
                data-testid="select-input">
              <option value="" data-testid="select-option">
                Todos
              </option>
                <option value="action"data-testid="select-option">
                Ação
              </option>
              <option value="comedy" data-testid="select-option">
                Comédia
              </option>
              <option value="thriller" data-testid="select-option">
                Suspense
              </option>
              </select>
            </div>
          </form>
        );
    }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;// implement SearchBar component here
