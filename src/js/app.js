import News from './News';

const news = new News(document.querySelector('.news'));
news.init();

(async () => {
  try {
    if (navigator.serviceWorker) {
      await navigator.serviceWorker.register('/service.worker.js');
      console.log('sw registered');
    }
  } catch (e) {
    console.log(e);
  }
})();

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
