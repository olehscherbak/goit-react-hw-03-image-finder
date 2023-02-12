import css from './Button.module.css';

export default function Button({ onClick }) {
  return (
    <button type="button" className={css.button} onClick={onClick}>
      Load more
    </button>
  );
}
