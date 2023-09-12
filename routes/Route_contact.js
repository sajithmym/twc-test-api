const express = require('express');

// define userController
const DataController = require('../controller/contact');

// define Express Route
const router = express.Router();

router.post('/create',DataController.create)

router.get('/get/:id',DataController.get)

router.post('/delele',DataController.delete)

router.post('/edit',DataController.edit)

module.exports = router;