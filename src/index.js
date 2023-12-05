import { fetchBreeds, fetchCatByBreed } from "./cat-api";

import axios from "axios";
axios.defaults.headers.common ["x-api-key"] = "live_KKRXbc8Dc9yTNb06QWF9f9Y2hWjxGTgmp9FluGVsZzhFdQncv0u4kbJ7pBLqymZ9";
import './styles.css';
import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';
import bootstrap from 'bootstrap'

const select = {
    selector: document.querySelector('.breed-select'),
    divCatInfo: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
};
const { selector, divCatInfo, loader, error } = select;

loader.classList.replace('loader', 'is-hidden');
error.classList.add('is-hidden');
divCatInfo.classList.add('is-hidden');

let arrBreedsId = [];
fetchBreeds()
.then(data => {
    data.forEach(element => {
        arrBreedsId.push({text: element.name, value: element.id});
    });
    new SlimSelect({
        select: selector,
        data: arrBreedsId
    });
    })
.catch(onFetchError);