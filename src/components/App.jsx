import { Component } from 'react';
// import { toast, ToastContainer } from 'react-toastify';

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
    status: 'idle',
    totalHits: 0,
  };

  componentDidUpdate(_, prevState) {
    const { page, query, totalHits } = this.state;
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending' });
      imageLoader(query, page)
        .then(response => {
          const { hits, totalHits } = response;
          // if (totalHits === 0) {
          //   this.setState({ query: '', page: 1, images: [] });
          //   return;
          // }

          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            status: 'resolved',
            totalHits,
          }));

          // console.table('images', this.state.images.length);
          // console.table('hits', this.state.tHits);
        })

        .catch(err => {
          this.setState({ query: '', page: 1, images: [], status: 'error' });
          console.log(err);
        });
    }
  }

  changeQuery = newQuery => {
    newQuery !== '' &&
      this.setState({
        query: newQuery,
        page: 1,
        images: [],
        status: 'idle',
      });
  };

  handleClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, status, totalHits } = this.state;
    if (status === 'idle') {
      return (
        <>
          <Searchbar onSubmit={this.changeQuery} />
          <p style={{ textAlign: 'center' }}>input something to search</p>
        </>
      );
    }

    if (status === 'error') {
      return (
        <>
          <Searchbar onSubmit={this.changeQuery} />
          <p style={{ textAlign: 'center' }}>
            oops, something went wrong, try one more time
          </p>
        </>
      );
    }

    return (
      <div>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery images={this.state.images} />
        {totalHits > images.length && <Button onClick={this.handleClick} />}
        {status === 'pending' && <Loader />}
        {/* <Modal /> */}
        {/* <ToastContainer />
        toast.warn('Please try to use another search word!'); */}
      </div>
    );
  }
}

export default App;
