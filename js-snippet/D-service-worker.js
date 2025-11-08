// include in public index.html
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
    .register('./sw_cached_pages.js')
    .then(reg => console.log('Service worker: Registered'))
    .catch(err => console.log(`Service worker: ${err}`))
  });
}
// another file
self.addEventListener('install', e=>{
    console.log("Service worker: Installed")
})

self.addEventListener('activate', e=>{
    console.log("Service worker: Activate")
})