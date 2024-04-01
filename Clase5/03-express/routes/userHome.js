const express = require('express');
const { home } = require('../controllers/userHomeController');
const router = express.Router();


router.get('/', home);

module.exports = router;