import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images }) {
  return (
    <ul className={css.imageGallery}>
      {images.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} id={id} src={webformatURL} alt={tags} />
      ))}
    </ul>
  );
}
