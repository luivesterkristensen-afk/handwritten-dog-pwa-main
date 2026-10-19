export async function fetchImage(){
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const result = await response.json();
    return result
}

