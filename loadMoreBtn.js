export default class LoadMoreBtn {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector);

    hidden && this.hide();
  }

  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    refs.label = refs.button.querySelector('.label');

    return refs;
  }

  show() {
    this.refs.button.classList.remove('is-hidden');
  }
}