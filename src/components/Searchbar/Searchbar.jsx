import { Component } from 'react';
import styles from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = evt => {
    this.setState({ query: evt.target.value });
  };

  handleSubmitForm = evt => {
    evt.preventDefault();
    this.props.onSubmitForm(this.state.query);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={this.handleSubmitForm}>
          <button type="submit" className={styles.button}>
            <span className={styles.buttonLabel}>Search</span>
          </button>
          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.setState.query}
          />
        </form>
      </header>
    );
  }
}
