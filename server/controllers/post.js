const Post = require('../models/Post');
const mongoose = require('mongoose');
const User = require('../models/User');



const  getPostsByUserId = async (req, res) => {

    const {_id} = req.user;

    try {
        const user = await User.findById(_id).populate('posts');
        const posts = user.posts;
        return res.status(200).send(posts)
    }
    catch (err) {
        return res.status(500).json({ err: err.message })
    }
}
// const  getPost = async (req, res) => {
//     const {id} = req.params;
//     try {
//         const post = await Post.findById(id)
//         return res.status(200).json({ post : post })
//     }
//     catch (err) {
//         return res.status(500).json({ err: err.message })
//     }
// }

const createAPost = async (req, res) => {
    const { title, body} = req.body;
    const userId = req.user._id
    try {
    const user =await User.findById(userId);
    const exists = await Post.findOne({userId:userId,title:title,body:body});
    
    if (!exists){
    const newPost = new Post({
        userId:user._id,
        _id : new mongoose.Types.ObjectId,
        title,
        body
    })
        const post = await newPost.save();
         const updatUser =await User.findOneAndUpdate({"_id":user._id},{$push:{posts:post._id}})
         await updatUser.save();

        return res.status(200).json({ post : newPost })
    }
    }
    catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

const updatePost = async (req, res) => {
    const {postId}= req.params;
    const userId = req.user._id
    try {
       await  Post.findByIdAndUpdate(postId,req.body);
       
       
        return res.status(200).json({ message : "post updated",})

    }
    catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

const deletePost = async (req, res) => {
    const userId= req.user._id
    const {postId}= req.params;
    try {
       await User.findByIdAndUpdate(userId,{$pull:{posts:postId}})
       await Post.findByIdAndRemove(postId);

       return res.status(200).json({ message : "post deleted",})
    }
    catch (err) {
        return res.status(500).json({ err: err.message })
    }
}
module.exports = {deletePost, updatePost, createAPost, getPostsByUserId}