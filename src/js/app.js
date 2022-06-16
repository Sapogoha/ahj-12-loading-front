import News from './News';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

const news = new News(document.querySelector('.news'));
news.init();
