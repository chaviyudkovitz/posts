const router = require('express').Router();
const mongoose = require('mongoose');
const user = require('../controllers/user');

router.post('/signin',user.login);
router.post('/signup',user.signUp);

module.exports = router;