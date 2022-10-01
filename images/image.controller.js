const express = require("express");
const router = express.Router();
const imageService = require("./image.service");

function addImages(req, res, next) {
    imageService
      .newImage(req.body)
      .then((result) => res.json({ code: 200, data: result }))
      .catch((err) => next(err));
  }

router.post("/addImage", addImages);

module.exports = router;