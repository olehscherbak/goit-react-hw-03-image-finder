import css from './Button.module.css';

export default function Button() {
  return (
    <button type="button" className={css.button}>
      Load more
    </button>
  );
}
