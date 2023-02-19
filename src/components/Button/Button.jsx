import css from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ onClick, disabled }) {
  return (
    <button
      type="button"
      className={css.button}
      onClick={onClick}
      disabled={disabled}
    >
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
