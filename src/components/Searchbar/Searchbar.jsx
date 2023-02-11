import css from './Searchbar.module.css';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

export default function Searchbar() {
  return (
    <header className={css.searchbar}>
      <form className={css.searchForm}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>Search</span>
          <SearchIcon width="80%" height="80%" />
        </button>

        <input
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
