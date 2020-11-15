// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.updateStatus = this.updateStatus.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  updateStatus({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
        </label>
        <input
          type="text"
          id="title"
          value={this.state.title}
          data-testid="title-input"
          onChange={this.updateStatus}
        />
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
        </label>
        <input
          type="text"
          id="subtitle"
          value={this.state.subtitle}
          data-testid="subtitle-input"
          onChange={this.updateStatus}
        />
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
        </label>
        <input
          type="text"
          id="imagePath"
          value={this.state.imagePath}
          data-testid="image-input"
          onChange={this.updateStatus}
        />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
        </label>
        <textarea
          id="storyline"
          value={this.state.storyline}
          data-testid="storyline-input"
          onChange={this.updateStatus}
        />
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
        </label>
        <input
          type="number"
          id="rating"
          value={this.state.rating}
          data-testid="rating-input"
          onChange={this.updateStatus}
        />
      </form>
    );
  }
}

export default AddMovie;
