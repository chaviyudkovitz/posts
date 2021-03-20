
const router = require('express').Router();
const mongoose = require('mongoose');
const post = require('../controllers/post')
const {authunticationToken} = require('../middleWare/authMiddleware')

router.post('/createAPost',authunticationToken,post.createAPost);

router.get('/getPostsByUserId',authunticationToken,post.getPostsByUserId);

router.delete('/deletePost/:postId',authunticationToken,post.deletePost);

router.patch('/updatePost/:postId',authunticationToken, post.updatePost);

module.exports = router;