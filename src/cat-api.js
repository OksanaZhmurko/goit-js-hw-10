const url = 'https://api.thecatapi.com/v1';
const api_key = "live_elupuIpxSGwTq2cH9wyj3ccPlSjNV2GEnHYavYCevuKuiAWYhW0pX5p7CQQ61y2R";
import axios from "axios";


export function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });       
};

export function fetchCatByBreed(breedId) {
    return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });  
};