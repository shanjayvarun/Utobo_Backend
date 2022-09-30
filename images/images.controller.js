const express = require('express');
const router = express.Router();
const imageService = require('./images.service');

router.post('/getall', getAll);
router.post('/imagecreate', register);

function getAll(req, res, next) {
    imageService.getAll()
        .then(images => res.json(images))
        .catch(err => next(err));
}

function register(req, res, next) {
    imageService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

module.exports = router;
