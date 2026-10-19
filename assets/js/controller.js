import { fetchImage } from "./model.js";

export async function getNewImage(){
    const result = await fetchImage()
    const image = document.querySelector("img")
    image.src = result.message
}