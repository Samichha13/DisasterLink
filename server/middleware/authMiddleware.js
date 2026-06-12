const jwt = require('jsonwebtoken')

const protect = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader || !authHeader.startsWith('Bearer')) {
            return res.status(401).json({ message: 'No token, not authorized' })
        }
        const token = authHeader.split(' ')[1]    //1 is just grabbing the 2nd index from array bearer being the 1st
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded

        next()
    } catch (err) {

        return res.status(401).json({ message: 'Token invalid, not authorized' })
    }
}

module.exports = protect;