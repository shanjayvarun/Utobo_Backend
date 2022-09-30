const db = require('_helpers/db');
const Image = db.Image;

module.exports.getAll =  async () => {
    return Image.find();
}

module.exports.create = async (imagesparams) => {
    const image = new Image(imagesparams);
    await image.save();
}

