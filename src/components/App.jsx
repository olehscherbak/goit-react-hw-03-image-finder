import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import imageLoader from '../services/api';

import Loader from './Loader/Loader';
// import Modal from './Modal/Modal';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      imageLoader(query, page)
        .then(images => this.setState({ images }))
        .finally(this.setState({ isLoading: false }));
    }
  }

  changeQuery = newQuery => {
    this.setState({ query: newQuery });
  };

  handleClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery images={this.state.images} />
        <Button onClick={this.handleClick} />
        {isLoading && <Loader />}
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
