const getData = require('../controllers/getdata')
const express = require('express');

const router = express.Router();

router.get('/:id', getData.getSingleContact);

module.exports = router;