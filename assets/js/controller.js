import { fetchImage } from "./model.js";

export async function getNewImage(){
    const result = await fetchImage()
    const image = document.getElementById("dogimg")
    image.src = result.message
}