window.onload = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
        .then(() => console.log('Service Worker registered.'))
        .catch(error => console.error('Registration failed:', error));
    }
  };
  