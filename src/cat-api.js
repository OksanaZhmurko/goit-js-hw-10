const url = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common ["x-api-key"] = "live_KKRXbc8Dc9yTNb06QWF9f9Y2hWjxGTgmp9FluGVsZzhFdQncv0u4kbJ7pBLqymZ9";

export function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });       
};

//https://api.thecatapi.com/v1/images/search

export function fetchCatByBreed(breedId){
    return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });       
}