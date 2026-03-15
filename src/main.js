import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const refs = {
  searchForm: document.querySelector('.form'),
};

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const query = formData.get('search-text').trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
      timeout: 3000,
    });
    return;
  }

  showLoader();

  clearGallery();

  getImagesByQuery(query)
    .then(res => {
      const images = res.hits;
      if (images.length === 0) {
        iziToast.info({
          title: 'Info',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 3000,
        });
      } else {
        createGallery(images);
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Please try again later.',
        position: 'topRight',
        timeout: 3000,
      });
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });

  refs.searchForm.reset();
});
