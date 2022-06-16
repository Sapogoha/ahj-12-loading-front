import News from './News';

(async () => {
  try {
    if (
      'serviceWorker' in navigator
      && process.env.NODE_ENV !== 'development'
    ) {
      await navigator.serviceWorker.register('./sw.js');
      console.log('sw registered');
    }
  } catch (error) {
    console.log('Service worker registration failed:', error);
  }
})();

const news = new News(document.querySelector('.news'));
news.init();
