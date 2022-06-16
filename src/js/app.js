import News from './News';

const news = new News(document.querySelector('.news'));
news.init();

if ('serviceWorker' in navigator && process.env.NODE_ENV !== 'development') {
  navigator.serviceWorker.register('/sw.js').catch((error) => {
    console.log('Service worker registration failed:', error);
  });
}

// (async () => {
//   try {
//     if (navigator.serviceWorker) {
//       await navigator.serviceWorker.register('./service.worker.js');
//       console.log('sw registered');
//     }
//   } catch (e) {
//     console.log(e);
//   }
// })();

// if (navigator.serviceWorker) {
//   window.addEventListener('load', async () => {
//     try {
//       if (navigator.serviceWorker) {
//         await navigator.serviceWorker.register('./service.worker.js');
//         console.log('sw registered');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   });
// }
