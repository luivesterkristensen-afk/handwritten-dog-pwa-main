import { fetchImage } from "./model.js"
import { buildDog } from "./view.js"
import { statics } from "./view.js"


if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js");
  console.log("App: service worker registered");
}


statics()
const result = await fetchImage()
buildDog(result)

