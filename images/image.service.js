const db = require("_helpers/db");
const ImageDb = db.Image

async function newImage(imageParam) {
  const images = new ImageDb(imageParam);
  const result = await images.save();
  console.log(result)
  return result;
}

module.exports = {
  newImage,
};
