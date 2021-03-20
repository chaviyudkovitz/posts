const User = require('../models/User');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ "email": email })
        const token = await jwt.sign({ user }, process.env.SECRET)
        return res.status(200).json({ user: user, token: token })
    }
    catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

const signUp = async (req, res) => {
    const { userName, email, password } = req.body;
    try {
        const user = new User({
            userName,
            email,
            password
        })
        await user.save();
        const token = await jwt.sign({ user }, process.env.SECRET)
        return res.status(200).json({ user: user, token: token })
    }
    catch (err) {
        return res.status(500).json({ err: err.message })
    }
}



module.exports = { signUp, login }