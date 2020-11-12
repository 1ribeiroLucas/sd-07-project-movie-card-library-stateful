import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    // retirar gambiarra quando feito protoType
    const prop = this.props;
    return (
      <form id="search-bar-form" data-testid="search-bar-form" >
        <label htmlFor="text-input" data-testid="text-input-label" >
          Inclui o texto:
        </label>
        <input
          value={prop.searchText}
          data-testid="text-input"
          onChange={(e) => prop.onSearchTextChange(e.target.value)}
        />
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label" >
          Mostrar somente favoritos
        </label>
        <input
          id="checkbox-input"
          type="checkbox"
          checked={prop.bookmarkedOnly}
          onChange={(e) => prop.onBookmarkedChange(e.target.value)}
          data-testid="checkbox-input"
        />
      </form>
    );
  }
}
