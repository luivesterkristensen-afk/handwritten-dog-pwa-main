import { fetchImage } from "./model.js"
import { buildDog } from "./view.js"

const result = await fetchImage()
buildDog(result)