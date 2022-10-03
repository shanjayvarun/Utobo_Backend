const db = require("_helpers/db");
const ImageDb = db.Image;
const UserDb = db.User;

async function newImage(imageParam) {
  if (
    await ImageDb.findOne({
      user_Id: imageParam.user_Id,
      imageUrl: imageParam.imageUrl,
    })
  ) {
    throw "userId Already Exists";
  }

  let counternumber = await ImageDb.find({ _id: { $exists: true } });
  imageParam.user_Id = counternumber.length;

  const images = new ImageDb(imageParam);
  const result = await images.save();
  return result;
}

async function getAllImages() {
  return await ImageDb.aggregate([
    {
      $lookup: {
        from: "UserDb",
        localField: "user_Id",
        foreignField: "userId",
        as: "joined_details",
      },
    },
  ]);
}

async function _delete(id) {
  return await ImageDb.findByIdAndRemove(id);
}

module.exports = {
  newImage,
  getAllImages,
  _delete
};
