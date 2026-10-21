// Navnet på Cache
const CACHE = "static-v1"

const FILES = 
[
"./",
"./index.html",
"./assets/css/reset.css",
"./assets/css/site.css",
"./assets/js/view.js",
"./assets/js/site.js",
"./assets/js/model.js",
"./assets/js/controller.js",
"./assets/img/littledog.jpg",
"./manifest.json",
"./assets/img/favicon.icon",
];


// Gemmer alle vores static filer i Cachen
self.addEventListener("install", (event)=>{
    console.log("Service worker: install");

  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(FILES))
  
  );
})

// Sikre også at den er aktiveret
self.addEventListener("activate", () => {
  console.log("Service worker: activate");
});





// Få den til at først kig i cachen
self.addEventListener("fetch", (event) => {

  console.log("Service worker: event", event);
   console.log("Service worker: fetch", event.request.url);

  event.respondWith(

    caches.match(event.request).then((response) => {
      if (response) {
        // Found in the cache
        console.log(response)
        return response;
      } else {
        // Not in the cache, get it from the network
        return fetch(event.request);
      }
    })


  ); 
});



