import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images }) {
  // componentDidMount() {
  // this.setState(imageLoader('it', 1));
  // console.log(imageLoader('it', 1));
  // imageLoader(' it ', 1).then(response => console.log(response.data.hits));
  // imageLoader(' it', 3).then(response =>
  //   this.setState({ images: response.data.hits })
  // );
  // }

  // console.log(images);

  return (
    images && (
      <ul className={css.imageGallery}>
        {images.map(({ id, webformatURL, tags }) => (
          <ImageGalleryItem key={id} id={id} src={webformatURL} alt={tags} />
        ))}
      </ul>
    )
  );
}
