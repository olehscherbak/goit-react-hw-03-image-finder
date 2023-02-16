import { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    totalHits: 0,
  };

  componentDidUpdate(_, prevState) {
    const { page, query } = this.state;
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      imageLoader(query, page)
        .then(response => {
          const { hits, totalHits } = response;
          if (totalHits === 0) {
            toast.warn('No images match your query!');
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            isLoading: false,
            totalHits: totalHits,
          }));
        })

        .catch(err => {
          this.setState({ query: '', page: 1, images: [], totalHits: 0 });
          console.log(err);
        });
    }
  }

  changeQuery = newQuery => {
    if (newQuery === '') {
      return toast.info('Please enter something to search!');
    }
    if (newQuery !== this.state.query) {
      this.setState({ query: newQuery, page: 1, images: [], totalHits: 0 });
    }
  };

  handleClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isLoading, totalHits } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery images={this.state.images} />
        {totalHits > images.length && <Button onClick={this.handleClick} />}
        {isLoading && <Loader />}
        {/* <Modal /> */}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
