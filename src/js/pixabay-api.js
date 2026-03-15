import axios from 'axios';

export function getImagesByQuery(query) {
  const baseURL = 'https://pixabay.com/api/';

  const params = {
    key: '55034403-f88339d3d304c1de3b7a91a97',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 21,
  };

  return axios.get(baseURL, { params }).then(res => res.data);
}
