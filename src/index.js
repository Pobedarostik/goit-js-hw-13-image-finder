import './sass/main.scss';
import ImageApiService from '../apiService';
import asd from '../asd.hbs';
import debounce from 'lodash.debounce';;
const refs = {
    form: document.querySelector('#search-form'),
    input: document.querySelector('#input'),
    button: document.querySelector('#button'),
    gallery: document.querySelector('.gallery'),
}

const imageApiService = new ImageApiService();

const autoSubmit = (e) => {
    // imageApiService(refs.input.value)
    //     .then(total => createItem(total.hits))
    //     .catch(err => console.log(err))
    return imageApiService.fetchImage(refs.input.value).then(cards => {
        createItem(cards);
    })
    // }
    // fetchProm.page = refs.input.value;
    // fetchProm.fetcArticles().then(hits => {
    // const markup = asd(hits);
    //     createItem(markup);

};


function createItem(hits) {
        const markup = asd(hits);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
    
}


refs.input.addEventListener('input', debounce(autoSubmit, 2000))
refs.button.addEventListener('click', autoSubmit)

// const element = document.getElementById('.my-element-selector');
// element.scrollIntoView({
//   behavior: 'smooth',
//   block: 'end',
// });
