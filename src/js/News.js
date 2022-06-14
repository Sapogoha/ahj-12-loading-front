/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
export default class News {
  constructor() {
    this.button = document.querySelector('.news__button');
    this.news = document.querySelector('.news');
    this.url = 'https://ahj-12-loading-back.herokuapp.com/news/arts&culture';
  }

  init() {
    this.requestData();
    this.button.addEventListener('click', () => {
      this.reload();
    });
    // this.registerWorker();
  }

  async requestData() {
    try {
      const request = await fetch(this.url);
      const response = await request.json();
      if (response.status === 'ok') {
        this.load(response);
      }
      return true;
    } catch (err) {
      this.showError(this.news);
    }
  }

  renderDate(timeStamp) {
    const date = new Date(timeStamp);

    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();

    this.date = `${day}.${month}.${year}`;
  }

  load(response) {
    response.news.forEach((news) => {
      const itemLoading = document.querySelector('.news__item_loading');
      if (itemLoading) {
        const dateLoading = itemLoading.querySelector('.item__date_loading');
        const imageLoading = itemLoading.querySelector('.item__image_loading');
        const lineLoading = itemLoading.querySelectorAll('.item__line_loading');
        const body = itemLoading.querySelector('.item__body');
        const text = itemLoading.querySelector('.item__text');

        itemLoading.dataset.id = news.id;
        itemLoading.classList.remove('news__item_loading');
        itemLoading.classList.add('news__item');

        dateLoading.classList.remove('item__date_loading');
        dateLoading.classList.add('item__date');
        this.renderDate(news.received);
        dateLoading.textContent = this.date;

        imageLoading.remove();
        const img = document.createElement('img');
        img.classList.add('item__image');
        img.src = news.image;
        body.insertAdjacentElement('afterBegin', img);

        const lines = Array.from(lineLoading);
        lines.forEach((line) => {
          line.remove();
        });
        text.textContent = news.text;
      }
    });
  }

  showError(parent) {
    const error = document.createElement('div');
    error.classList.add('error');
    error.textContent = 'Loading failed. Check your network connection';
    parent.appendChild(error);
    this.newsAll = parent.querySelector('.news__all');
    this.newsAll.style.opacity = '0.2';
  }

  reload() {
    const items = Array.from(document.querySelectorAll('.news__item'));

    if (items) {
      items.forEach((item) => {
        item.dataset.id = '';
        const date = item.querySelector('.item__date');
        const image = item.querySelector('.item__image');
        const body = item.querySelector('.item__body');
        const text = item.querySelector('.item__text');

        item.classList.remove('news__item');
        item.classList.add('news__item_loading');

        date.classList.remove('item__date');
        date.classList.add('item__date_loading');
        date.textContent = '';

        image.remove();
        const img = document.createElement('div');
        img.classList.add('item__image_loading');
        body.insertAdjacentElement('afterBegin', img);

        text.textContent = '';
        const line = document.createElement('p');
        line.classList.add('item__line_loading');
        const secondLine = document.createElement('p');
        secondLine.classList.add('item__line_loading');
        text.append(line, secondLine);
      });
    }
    this.requestData();
  }

  // registerWorker() {
  //   if (navigator.serviceWorker) {
  //     window.addEventListener('load', async () => {
  //       try {
  //         await navigator.serviceWorker.register('./service.worker.js', {
  //           scope: './',
  //         });
  //         console.log('sw registered');
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     });
  //   }
  // }
}
