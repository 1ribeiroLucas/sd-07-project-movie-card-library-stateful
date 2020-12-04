import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="find" data-testid="text-input-label">
          Inclui o texto
        </label>
        <input
          type="text"
          value={searchText}
          onChange={onSearchTextChange}
          data-testid="text-input"
          name="find"
        />
        <label htmlFor="find2" data-testid="checkbox-input-label">
          Mostrar somente favoritos
        </label>
        <input
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          data-testid="checkbox-input"
          name="find2"
        />
        <label htmlFor="find3" data-testid="select-input-label">
          Filtrar por gênero
        </label>
        <select
          value={selectedGenre}
          onChange={onSelectedGenreChange}
          name="find3"
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">
            Todos
          </option>
          <option value="action" data-testid="select-option">
            Ação
          </option>
          <option value="comedy" data-testid="select-option">
            Comédia
          </option>
          <option value="thriller" data-testid="select-option">
            Suspense
          </option>
        </select>
      </form>
    );
  }
}

SearchBar.proptypes = {
  onSelectedGenreChange: React.PropTypes,
  searchText: React.PropTypes,
  onSearchTextChange: React.PropTypes,
  bookmarkedOnly: React.PropTypes,
  onBookmarkedChange: React.PropTypes,
  selectedGenre: React.PropTypes,
  onSelectedGenreChange: React.PropTypes,
};

export default SearchBar;
