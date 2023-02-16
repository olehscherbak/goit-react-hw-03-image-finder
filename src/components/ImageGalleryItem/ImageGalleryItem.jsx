import { Component } from 'react';
import Modal from '../Modal/Modal';

import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { srcSmallImg, srcLargeImg, alt } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <li className={css.galleryItem} onClick={this.toggleModal}>
          <img
            className={css.imageGalleryItemImage}
            src={srcSmallImg}
            alt={alt}
          />
        </li>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={srcLargeImg} alt={alt} />
          </Modal>
        )}
      </>
    );
  }
}
