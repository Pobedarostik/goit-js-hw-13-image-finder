import './sass/main.scss';
import ImageApiService from '../apiService';
import imgList from '../imgList.hbs';
import LoadMoreBtn from '../loadMoreBtn.js';


const refs = {
    form: document.querySelector('#search-form'),
    input: document.querySelector('.search-form__input'),
    buttonSearch: document.querySelector('.searchButton'),
    gallery: document.querySelector('.gallery'),
    buttonLodMore: document.querySelector('.button'),
}

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

const imageApiService = new ImageApiService();

const autoSubmit = (e) => {

    e.preventDefault();

    imageApiService.resetPage();
    fetchCards();
    loadMoreBtn.show()


};


function fetchCards() {
     imageApiService.fetchImage(refs.input.value).then(cards => {
         createItem(cards)
     }).then(() => {

         if (imageApiService.page > 2) {
               refs.gallery.lastElementChild.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
         }
            
    })
};

function createItem(hits) {
    refs.gallery.insertAdjacentHTML('beforeend', imgList(hits))
    
}
refs.form.addEventListener('submit', autoSubmit);
refs.buttonLodMore.addEventListener('click', fetchCards);