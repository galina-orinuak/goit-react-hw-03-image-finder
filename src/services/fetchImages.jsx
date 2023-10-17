import axios from 'axios';

export async function fetchImages(query, page) {
  const BASE_URL = 'https://pixabay.com/api/?';
  const API_KEY = '39241175-920eb89e79fcd4cc7c8ced0a6';
  const PER_PAGE = '12';

  return await axios.get(`${BASE_URL}q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`);
}

