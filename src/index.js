import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_KKRXbc8Dc9yTNb06QWF9f9Y2hWjxGTgmp9FluGVsZzhFdQncv0u4kbJ7pBLqymZ9";

import SlimSelect from 'slim-select'
import Notiflix from 'notiflix';
import bootstrap from 'bootstrap'

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

breedSelect.addEventListener('change', event => {
    const selectedBreed = event.target.value;
});


function fetchBreeds(){

}