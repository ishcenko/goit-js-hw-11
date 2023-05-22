import axios from 'axios';
import { Notify } from 'notiflix';

const API_KEY = '36635835-1a5acf2613ff4fb943c33399a';
const URL = 'https://pixabay.com/api/';

export async function fetchImages(options) {
  let parameters = new URLSearchParams(options);
  const images = await axios.get(`${URL}?key=${API_KEY}&${parameters}`);

  if (parameters.page === 1 && images.data.totalHits != 0) {
    Notify.success(`Hooray! We found ${totalHits} images!`);
  }

  return images.data;
}
