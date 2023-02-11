import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ id, src, alt }) {
  return (
    <li className={css.galleryItem}>
      <img className={css.imageGalleryItemImage} src={src} alt={alt} />
    </li>
  );
}
