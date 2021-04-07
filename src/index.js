import './styles.css';
import refs from './js/refs.js';
import { debounce, fetchCountry } from './js/main.js';

const search = debounce(fetchCountry, 500);
refs.countryInput.addEventListener('input', search);
