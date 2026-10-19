import { getNewImage } from "./controller.js"
import { fetchImage } from "./model.js"

export function buildDog(result){
   const image = document.createElement("img")
   image.src = result.message

    image.addEventListener("click", getNewImage)

    document.getElementById("app").appendChild(image)
}