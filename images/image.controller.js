const express = require("express");
const router = express.Router();
const imageService = require("./image.service");

function addImages(req, res, next) {
  imageService
    .newImage(req.body)
    .then((result) => res.json({ code: 200, data: result }))
    .catch((err) => next(err));
}

function getImages(req, res, next) {
  imageService
    .getAllImages()
    .then((images) => res.send({ code: 200, data: images }))
    .catch((err) => next(err));
}

router.post("/addImage", addImages);
router.get("/getAllimages", getImages);

module.exports = router;
