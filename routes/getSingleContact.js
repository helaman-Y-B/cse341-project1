const getData = require('../controllers/getdata')
const express = require('express');

const router = express.Router();

router.get('/', getData.getSingleContact);

module.exports = router;