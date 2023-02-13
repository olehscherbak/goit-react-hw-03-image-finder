import css from './Searchbar.module.css';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

export default function Searchbar({ onSubmit }) {
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(evt.target.query.value.toLowerCase().trim());
    // console.log(evt.target.query.value);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>Search</span>
          <SearchIcon width="80%" height="80%" />
        </button>

        <input
          className={css.searchFormInput}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
