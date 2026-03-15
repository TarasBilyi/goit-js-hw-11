import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader-wrap');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});

function createImage({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
          <a href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              data-source="${largeImageURL}"
              alt="${tags}"
							loading="lazy"
            />
          </a>
          <ul class="gallery-info-list">
            <li>
              <p class="info-title">Likes</p>
              <p class="info-text">${likes}</p>
            </li>
            <li>
              <p class="info-title">Views</p>
              <p class="info-text">${views}</p>
            </li>
            <li>
              <p class="info-title">Comments</p>
              <p class="info-text">${comments}</p>
            </li>
            <li>
              <p class="info-title">Downloads</p>
              <p class="info-text">${downloads}</p>
            </li>
          </ul>
        </li>`;
}

export function createGallery(images) {
  if (!gallery) return;

  if (images.length === 0) {
    gallery.innerHTML = '';
    lightbox.refresh();
    return;
  }

  const markup = images.map(createImage).join('');
  gallery.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  if (gallery) {
    gallery.innerHTML = '';
    lightbox.refresh();
  }
}

export function showLoader() {
  if (loader) {
    loader.classList.remove('is-hidden');
  }
}

export function hideLoader() {
  if (loader) {
    loader.classList.add('is-hidden');
  }
}
