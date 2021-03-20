const jwt = require('jsonwebtoken');

async function authunticationToken(req, res, next) {

    try {
        const authToken = req.headers['authorization']

        const token = authToken && authToken.split(' ')[1]
        if (!token) {
            return res.status(401).json({ message: "no token" });
        }
        const user = await jwt.verify(token, process.env.SECRET);
        req.user = user.user;
    }
    catch (err) {
        console.log(err)
        return res.status(403).json({ message: "token not valid" });
    }
    next();
}

module.exports = { authunticationToken };