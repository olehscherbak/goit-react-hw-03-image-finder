import axios from 'axios';

async function imageLoader(searchedLine, pageNumber) {
  const BASE_URL = 'https://pixabay.com/api/';
  const options = {
    params: {
      key: '31679627-0bccaed8555ea749f004800c2',
      q: searchedLine,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: pageNumber,
      per_page: 12,
    },
  };

  return (await axios.get(BASE_URL, options)).data;
}

export default imageLoader;
