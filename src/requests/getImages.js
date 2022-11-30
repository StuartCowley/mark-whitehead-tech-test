import axios from 'axios';

async function getImages(query) {
  if (!query) {
    return [];
  } else {
    try {
      const response = await axios.get(
        `https://images-api.nasa.gov/search?q=${query}`
      );
      const imageResults = response.data.collection.items;
      const parsedImages = imageResults.filter(
        (e) => e.data[0].media_type === 'image'
      );
      const images = parsedImages.map((image) => image.links[0].href);
      return images;
    } catch (err) {
      console.log(err);
    }
  }
}

export default getImages;
