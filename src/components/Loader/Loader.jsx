import { createPortal } from 'react-dom';
import { Dna } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  const loaderRoot = document.querySelector('#loader-root');
  return createPortal(
    <div className={css.loaderContainer}>
      <Dna width="150" height="150" ariaLabel="dna-loading" />
    </div>,
    loaderRoot
  );
}
