const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
    // Get the token from header
    const token = req.header('x-auth-token');

    if (!token) return res.status(401).send({ msg: 'access denied' })

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'))

        req.user = decoded.user;
        next()
    } catch (error) {
        res.status(400).send({ msg: "token is not valid" })

    }
}