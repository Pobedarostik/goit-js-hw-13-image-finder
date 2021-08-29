export default class ImageApiService {
    constructor() {
        this.page = 1;
    };

    fetchImage(searchQuery) {
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${this.page}&per_page=12&key=23105457-2163ce7f6d7cdb7b080badb2a`;

        return fetch(url).then(response =>
            response.json()).then(({ hits }) => {
                this.incrementPage();
                return hits;
            }).catch(error => {
                console.log(error);
            });
        
    };

    incrementPage() {
    this.page += 1;
    }
    
    resetPage() {
        this.page = 1;
    }
}

   